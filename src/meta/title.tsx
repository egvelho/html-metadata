import React from "react";

export interface MetaTitleProps {
  title: string;
}

export function MetaTitle({ title }: MetaTitleProps) {
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
