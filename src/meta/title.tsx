import React from "react";

export function MetaTitle({ title }: { title: string }) {
  return (
    <>
      <title key="title">{title}</title>
      <meta key="og-title" property="og:title" content={title} />
      <meta key="twitter-title" name="twitter:title" content={title} />
      <meta
        key="apple-mobile-web-app-title"
        name="apple-mobile-web-app-title"
        content={title}
      />
    </>
  );
}
