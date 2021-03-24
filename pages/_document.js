import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
          <Head>
            <title>mi Porfolio</title>
            <meta name="description" content="Aranda Porfolio Webside"></meta>
          </Head>
          <body>
             <Main></Main>
              <NextScript></NextScript>
          </body>
      </Html>
    )
  }
}

export default MyDocument