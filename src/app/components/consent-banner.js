import Script from "next/script";

export function ConsentBanner() {
  return (
    <>
      <Script
        className="consent-banner"
        type="text/javascript"
        strategy="beforeInteractive"
        src="https://app.termly.io/resource-blocker/67d31191-2f80-4f5e-9efe-bf9eb3d34fd1?autoBlock=on"
      ></Script>
    </>
  );
}
