import React from "react";

export interface MetaAuthorProps {
  author: string;
}

export function MetaAuthor({ author }: MetaAuthorProps) {
  return (
    <>
      <meta key="author" name="author" content={author} />
    </>
  );
}
