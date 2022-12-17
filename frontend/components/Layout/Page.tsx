import React from "react";

export default function Page({ children }: pageLayoutCtx) {
  return (
    <>
      <main>
        <article>{children}</article>
      </main>
    </>
  );
}
