import React from "react";

export function MetaPageUrl({ url }: { url: string }) {
  return (
    <>
      <meta key="og-url" property="og:url" content={url} />
      <link key="canonical" rel="canonical" href={url} />
    </>
  );
}