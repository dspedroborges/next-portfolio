import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Pedro Borges | Desenvolvedor de software</title>
        <link rel="shortcut icon" href="/icone.png" type="image/png" />
        <meta name="application-name" content="Pedro Borges" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Desenvolvedor de software" />
        <meta name="keywords" content="CPedro Borges"></meta>
        <meta http-equiv="content-language" content="pt-br" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="creator" content="Pedro Borges" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta itemProp="name" content="Pedro Borges" />
        <meta itemProp="description" content="Desenvolvedor de software" />
        <meta itemProp="image" content="/logo.png" />

        <meta name="twitter:title" content="Pedro Borges" />
        <meta name="twitter:description" content="Desenvolvedor de software" />
        <meta name="twitter:image" content="/logo.png" />

        <meta property="og:title" content="Pedro Borges" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www.lojafinapalha.com.br/" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:description" content="Desenvolvedor de software" />
        <meta property="og:site_name" content="Pedro Borges" />

        {/* Google */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
