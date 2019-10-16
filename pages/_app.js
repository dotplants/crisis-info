import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import '../scss/index.scss';

export default class CrisisRoot extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Crisis Info - クライシスインフォ</title>
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#FFFFFF" />
          <meta
            name="description"
            content="災害時に必要な情報やリンク集をウェブアプリで提供"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
