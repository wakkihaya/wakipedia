import { randomBytes } from "crypto";

import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

type WithNonceProp = {
  nonce: string;
};

export default class MyDocument extends Document<WithNonceProp> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps & WithNonceProp> {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = randomBytes(128).toString("base64");

    return {
      ...initialProps,
      nonce,
    };
  }

  render(): JSX.Element {
    const nonce = this.props.nonce;
    return (
      <Html lang="en">
        <Head nonce={nonce}>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="canonical" href="https://wakipedia.site" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
