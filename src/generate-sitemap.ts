import path from "path";
import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

interface Url {
  disallow: boolean;
  priority: number;
  changefreq: string;
  lastmod: string;
  url: string;
}

async function getFiles(dir: string): Promise<string | string[]> {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

async function getUrls(
  files: string[],
  mapPathToImport: (path: string) => Promise<any>
): Promise<Array<Url>> {
  return (
    await Promise.all(
      files
        .map((file) => `.${path.sep}${path.relative(process.cwd(), file)}`)
        .filter((file) => !path.basename(file).startsWith("_"))
        .filter((file) =>
          path.relative(path.join("pages", "api"), path.dirname(file))
        )
        .map((file) => file.split(".").slice(0, -1).join("."))
        .map((file) => file.replace(/\\/g, "/"))
        .map((file) => file.replace("./pages/", ""))
        .map(async (file) => {
          const page = await mapPathToImport(file);
          const getPaths = page.getStaticPaths ?? page.getServerSidePaths;
          const urls: Array<Url> = getPaths
            ? await Promise.all(
                await getPaths({}).paths?.map(
                  async ({ params }: any) =>
                    ({
                      disallow: page.disallow ?? false,
                      priority: page.priority ?? 0.5,
                      changefreq: page.changeFrequency ?? "daily",
                      lastmod:
                        (page.getLastModificationDate &&
                          (await page
                            .getLastModificationDate(params)
                            .toISOString())) ??
                        new Date().toISOString(),
                      url: `/${objectToUrl(file, params)}/`,
                    } as Url)
                )
              )
            : [];
          return urls.length > 0
            ? urls
            : [
                {
                  disallow: page.disallow ?? false,
                  priority: page.priority ?? 0.5,
                  changefreq: page.changeFrequency ?? "daily",
                  lastmod:
                    (page.getLastModificationDate &&
                      (await page.getLastModificationDate().toISOString())) ??
                    new Date().toISOString(),
                  url: file === "index" ? "/" : `/${file}/`,
                } as Url,
              ];
        })
    )
  ).flat();
}

function objectToUrl<T extends Object>(url: string, object: T) {
  return url
    .split("/")
    .map((substring) => substring.match(/\[([^\)]+)\]/))
    .filter((substring) => substring)
    .reduce((newUrl, substring) => {
      const urlKey = (substring ?? [])[0];
      const key = ((substring ?? [])[1] ?? "").replace(
        "...",
        ""
      ) as keyof typeof object;

      const partialUrl = (() => {
        if (typeof object[key] === "string") {
          return newUrl.replace(urlKey, object[key] as any);
        } else if (urlKey.startsWith("[...")) {
          return newUrl.replace(urlKey, (object[key] as any).join("/"));
        } else {
          return newUrl.replace(urlKey, "");
        }
      })();
      return partialUrl;
    }, url);
}

function getSitemap(urls: Array<Url>) {
  const links = urls
    .filter(({ disallow }) => !disallow)
    .map(({ priority, changefreq, url }) => ({
      url,
      changefreq,
      priority,
    }));
  const stream = new SitemapStream({ hostname: process.env.NEXT_PUBLIC_URL });
  return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );
}

function getRobots(urls: Array<Url>): string {
  const publicUrl = process.env.NEXT_PUBLIC_URL?.endsWith("/")
    ? process.env.NEXT_PUBLIC_URL?.slice(-1)
    : process.env.NEXT_PUBLIC_URL;
  return `User-agent: *${urls
    .filter(({ url, disallow }) => disallow)
    .map(
      ({ url }) => `\nDisallow: ${publicUrl}${url}`
    )}\nSitemap: ${publicUrl}/sitemap.xml`;
}

export async function generateSitemap(
  mapPathToImport: (path: string) => Promise<any>
) {
  const files = (await getFiles("./pages")) as string[];
  const urls = await getUrls(files, mapPathToImport);
  const sitemap = await getSitemap(urls);
  const robots = getRobots(urls);
  fs.writeFileSync(path.join("public", "sitemap.xml"), sitemap);
  fs.writeFileSync(path.join("public", "robots.txt"), robots);
  process.exit();
}
