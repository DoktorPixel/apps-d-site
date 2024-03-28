import Script from "next/script";

export function Chatbot() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={process.env.CHATBOT_SRC}
      ></Script>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.embeddedChatbotID = "${process.env.EMBEDDED_CHATBOT_ID}";
          window.chatSize = "medium";
          `,
        }}
      />
    </>
  );
}
