import Docuemnt, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps, } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function MyDocument() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async(
  ctx: DocumentContext,
): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  console.log(sheet)

  try{
    ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
    })
    
    const initialProps = await Docuemnt.getInitialProps(ctx)
    return{
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  }finally{
    sheet.seal()
  }
}
