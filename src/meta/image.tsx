import React from "react";

export function MetaImage({ image }: { image: string }) {
  return (
    <>
      <meta key="twitter-image" name="twitter:image" content={image} />
      <meta key="og-image" property="og:image" content={image} />
    </>
  );
}
