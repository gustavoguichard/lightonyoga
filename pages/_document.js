import Document, { Html, Head, Main, NextScript } from 'next/document'
import Analytics from 'components/analytics'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.xz.style/serve/inter.css"
          />
          <link
            rel="sitemap"
            type="application/xml"
            title="Sitemap"
            href="/sitemap.xml"
          />
          <link rel="icon" href="/favicon.png" />
          <Analytics />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
