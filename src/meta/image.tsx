import React from "react";

export interface MetaImageProps {
  image: string;
}

export function MetaImage({ image }: MetaImageProps) {
  return (
    <>
      <meta key="twitter-image" name="twitter:image" content={image} />
      <meta key="og-image" property="og:image" content={image} />
    </>
  );
}
