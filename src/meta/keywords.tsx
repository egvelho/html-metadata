import React from "react";

export function MetaKeywords({ keywords }: { keywords: string[] }) {
  return (
    <>
      <meta name="keywords" content={keywords.join(",")} />
    </>
  );
}
