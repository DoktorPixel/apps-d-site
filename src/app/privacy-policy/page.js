"use client";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.id = "termly-jssdk";

    document.getElementsByTagName("head")[0].appendChild(script);

    return () => {
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []);

  return (
    <div className="privacy-policy">
      <div
        name="termly-embed"
        data-id="ee77c904-6e67-4071-a6dc-779d2fbc3f38"
      ></div>
    </div>
  );
};

export default PrivacyPolicy;
