"use client";
import { useState } from "react";
import Image from "next/image";

function Features({ fields }) {
  const [features, setFeatures] = useState(fields.features);
  return (
    <div className="product-article-second">
      <h2 className="product-article-header header-second">{fields.headline}</h2>
      <div className="product-article-cards">
        {features.map((feature, index) => (
          <div className="product-article-card" key={index}>
            <Image src={feature.icon} alt={feature.headline} width={49} height={49} />
            <h3>{feature.headline}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
