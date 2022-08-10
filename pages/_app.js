import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://static.zdassets.com/zendesk_app_framework_sdk/2.0/zaf_sdk.min.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
