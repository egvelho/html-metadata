import React from "react";

export function MetaMisc({
  facebookAppId,
  twitterAt,
  url,
  name,
  dashColor,
}: {
  facebookAppId?: string;
  twitterAt?: string;
  url: string;
  name: string;
  dashColor: string;
}) {
  return (
    <>
      facebookAppId && <meta property="fb:app_id" content={facebookAppId} />
      twitterAt && <meta name="twitter:creator" content={twitterAt} />
      twitterAt && <meta name="twitter:site" content={twitterAt} />
      <meta name="url" content={url} />
      <meta property="og:site_name" content={name} />
      <meta name="application-name" content={name} />
      <meta name="msapplication-TileColor" content={dashColor} />
      <meta name="theme-color" content={dashColor} />
    </>
  );
}
