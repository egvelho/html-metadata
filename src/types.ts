export interface PageMeta {
  url: string;
  image: string;
  keywords: string[];
}

export interface App {
  name: string;
  shortName: string;
  description: string;
  twitterAt?: string;
  facebookAppId?: string;
  iconPath: string;
  version: string;
  developerName: string;
  developerURL: string;
  backgroundColor: string;
  dashColor: string;
  primaryColor: string;
  secondaryColor: string;
  lang: string;
  orientation: "portrait" | "landscape";
}
