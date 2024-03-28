"use client";
import { useEffect } from "react";

const CookiesPolicy = () => {
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
        data-id="ed760bb8-17e7-49c0-af33-28fc4216f5c6"
      ></div>
    </div>
  );
};

export default CookiesPolicy;
