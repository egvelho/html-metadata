import React from "react";

export function MetaAuthor({ author }: { author: string }) {
  return (
    <>
      <meta name="author" content={author} />
    </>
  );
}
