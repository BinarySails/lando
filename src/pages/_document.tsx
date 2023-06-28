import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" type="image/x-icon" href="/Emblem-1.svg" />
        <Script strategy="afterInteractive" id="google-script-src" async src="https://www.googletagmanager.com/gtag/js?id=G-ZG7HVZ5EWR"></Script>
        <Script id="google-script"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZG7HVZ5EWR');
`
          }}
        >
        </Script>
        <Script defer data-domain="lando.homes" src="https://plausible.io/js/script.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
