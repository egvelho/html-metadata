import React from "react";

export function MetaKeywords({ keywords }: { keywords: string[] }) {
  return (
    <>
      <meta key="keywords" name="keywords" content={keywords.join(",")} />
    </>
  );
}
