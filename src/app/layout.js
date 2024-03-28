import "./globals.css";
import { Header } from "./components/header/header";
import { Footer } from "@/app/components/footer/footer";
import Whitepaper from "@/app/components/popup/popup";
// import { GoogleTag } from "../../public/gtag";
import Script from "next/script";
// import { TrackingTool } from "./components/tracking-tool";
// import { Chatbot } from "../../public/chatbot";

export const metadata = {
  title: "AppsDelivered",
  description:
    "AppsDelivered is a team of skilled professionals with years of background in the digital realm.",
  metadataBase: new URL("https://www.appsdelivered.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    url: "/",
    images: [
      {
        url: "/opengraph-image.png",
        width: 342,
        height: 390,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <html lang="en">
        <body>
					{/* <Chatbot /> */}
          <Script
            className="consent-banner"
            type="text/javascript"
            strategy="lazyOnload"
            src="https://app.termly.io/resource-blocker/67d31191-2f80-4f5e-9efe-bf9eb3d34fd1"
          />
          {/* <GoogleTag /> */}
          {/* <TrackingTool /> */}
          <Header />
          <main className="main">{children}</main>
          <Whitepaper />
          <Footer />
        </body>
      </html>
    </>
  );
}
