import React from "react";

export interface MetaKeywordsProps {
  keywords: string[];
}

export function MetaKeywords({ keywords }: MetaKeywordsProps) {
  return (
    <>
      <meta key="keywords" name="keywords" content={keywords.join(",")} />
    </>
  );
}
