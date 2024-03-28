import Script from "next/script";

export function Chatbot() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src="https://awaitai-uat-cdn-bot.azureedge.net/static/js/chatbotLoader.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.embeddedChatbotID = "70f4af7c-a898-4887-9992-7cdfc1a8fae9";
          window.chatSize = "medium";
          `,
        }}
      />
    </>
  );
}
