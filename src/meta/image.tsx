import React from "react";

export function MetaImage({ image }: { image: string }) {
  return (
    <>
      <meta name="twitter:image" content={image} />
      <meta property="og:image" content={image} />
    </>
  );
}