import slug from "slug";
import {
  CmsCollectionFile,
  CmsField,
  CmsCollection,
  CmsConfig,
} from "netlify-cms-core";

export function files(label: string, files: CmsCollectionFile[]) {
  return {
    name: slug(label),
    label,
    format: "json",
    files,
  } as CmsCollection;
}

export function file(label: string, file: string, fields: CmsField[]) {
  return {
    name: slug(label),
    label,
    file,
    fields,
  } as CmsCollectionFile;
}

export function folder(
  options: {
    label: string;
    label_singular: string;
    folder: string;
  } & Partial<CmsCollection>,
  fields: CmsField[]
) {
  return {
    ...options,
    name: options.label ? slug(options.label) : options.name,
    label: options.label,
    label_singular: options.label_singular,
    folder: options.folder,
    create: options.create ?? true,
    format: options.format ?? "json",
    fields: fields ?? options.fields,
  } as CmsCollection;
}

export function getCmsConfig({
  locale = "pt",
  localBackend = "http://localhost:8081/api/v1",
  collections = [] as CmsCollection[],
}) {
  return {
    config: {
      locale,
      backend: {
        name: "git-gateway",
      },
      local_backend:
        process.env.NODE_ENV === "development"
          ? {
              url: localBackend,
            }
          : {},
      publish_mode:
        process.env.NODE_ENV === "development"
          ? undefined
          : "editorial_workflow",
      load_config_file: false,
      media_folder: "public/images",
      public_folder: "/images",
      site_url:
        process.env.NEXT_PUBLIC_URL ??
        process.env.REACT_APP_URL ??
        process.env.URL,
      logo_url: "/android-chrome-96x96.png",
      show_preview_links: false,
      editor: {
        preview: false,
      },
      slug: {
        encoding: "unicode",
        clean_accents: true,
        sanitize_replacement: "-",
      },
      collections,
    } as CmsConfig,
  };
}
