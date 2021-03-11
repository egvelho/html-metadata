import React from "react";

export function MetaAuthor({ author }: { author: string }) {
  return (
    <>
      <meta key="author" name="author" content={author} />
    </>
  );
}
