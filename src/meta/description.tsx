import React from "react";

export interface MetaDescriptionProps {
  description: string;
}

export function MetaDescription({ description }: MetaDescriptionProps) {
  return (
    <>
      <meta
        key="og-description"
        property="og:description"
        content={description}
      />
      <meta
        key="twitter-description"
        name="twitter:description"
        content={description}
      />
      <meta
        key="twitter-image-alt"
        name="twitter:image:alt"
        content={description}
      />
      <meta key="description" name="description" content={description} />
    </>
  );
}
