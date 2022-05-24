import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html dir='rtl' lang='fa-IR'>
      <Head />
      <link
        href='https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap'
        rel='stylesheet'
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
