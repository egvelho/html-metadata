import React from "react";

export interface MetaPageUrlProps {
  url: string;
}

export function MetaPageUrl({ url }: MetaPageUrlProps) {
  return (
    <>
      <meta key="og-url" property="og:url" content={url} />
      <link key="canonical" rel="canonical" href={url} />
    </>
  );
}
