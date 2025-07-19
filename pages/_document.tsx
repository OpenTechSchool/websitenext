import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    const isGithubActions = process.env.GITHUB_ACTIONS || false
    const hasCustomDomain = process.env.CUSTOM_DOMAIN === 'true'
    const basePath = (isGithubActions && !hasCustomDomain) ? `/${process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || ''}` : ''
    
    return (
      <Html lang='en'>
        <Head>
          {/* Preload fonts for better client-side navigation */}
          <link
            rel="preload"
            href={`${basePath}/fonts/OpenSans/OpenSans.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={`${basePath}/fonts/Roboto/Roboto.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={`${basePath}/fonts/MaterialIcons/MaterialIcons.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
