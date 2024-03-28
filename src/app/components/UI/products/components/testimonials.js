"use client";
import React, { useState } from "react";
import Quotes from "public/img/products/product-pages/quotes.svg";
import Image from "next/image";

function Testimonials({ fields }) {
  const [testimonials, setTestimonials] = useState(fields.testimonial);

  return (
    <div className="product-article-testimonials">
      <h2 className="product-article-header testimonials-header">{fields.headline}</h2>
      <div className="testimonials-cards-wrapper">
        {testimonials.map((testimonial, index) => (
          <div className="testimonials-card" key={index}>
            <div className="testimonials-card-content">
              <div>
                <Image src={Quotes} alt="Quotes" width={38} height={35} />
              </div>
              <div>
                <p>{testimonial.quote}</p>
                <p>{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
