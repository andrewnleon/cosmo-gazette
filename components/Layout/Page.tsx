import React from "react";
import { pageLayoutCtx } from "../../typings";

export default function Page({ children }: pageLayoutCtx) {
  return (
    <>
      <main>
        <article>{children}</article>
      </main>
    </>
  );
}
