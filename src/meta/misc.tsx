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
      {facebookAppId && (
        <meta key="fb-app-id" property="fb:app_id" content={facebookAppId} />
      )}
      {twitterAt && (
        <meta
          key="twitter-creator"
          name="twitter-creator"
          content={twitterAt}
        />
      )}
      {twitterAt && (
        <meta key="twitter-site" name="twitter:site" content={twitterAt} />
      )}
      <meta key="url" name="url" content={url} />
      <meta key="og-site-name" property="og:site_name" content={name} />
      <meta key="application-name" name="application-name" content={name} />
      <meta
        key="msapplication-tile-color"
        name="msapplication-TileColor"
        content={dashColor}
      />
      <meta key="theme-color" name="theme-color" content={dashColor} />
    </>
  );
}
