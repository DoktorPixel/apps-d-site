import Script from "next/script";

export function ChatbotScript() {
  return (
    <>
      <Script
        className="chatbot-script"
        src="https://awaitai-cdn-bot.azureedge.net/static/js/chatbotLoader.js"
        strategy="lazyOnload"
      />
      <Script id="chatbot-config" strategy="afterInteractive">
        {`
            window.embeddedChatbotID = "eda2b426-909e-4ff7-ab22-c66e3882bba3";
            window.chatSize = "medium";
          `}
      </Script>
    </>
  );
}
