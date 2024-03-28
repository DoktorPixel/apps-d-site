import Script from "next/script";

export function GoogleTag() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V01F6D0ZG4"
      />
      <Script strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-V01F6D0ZG4');`}
      </Script>
    </>
  );
}
