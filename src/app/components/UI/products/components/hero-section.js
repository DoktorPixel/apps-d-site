"use client";
import Link from "next/link";
import OpenSVG from "public/img/products/open.svg";
import PhoneSVG from "public/img/products/product-pages/phone.svg";
import Image from "next/image";

function HeroSection({ fields }) {
  return fields.image ? (
    <div className="product-pages-banner">
      <div className="product-pages-breadcrumb">
        <Link href="/">Home </Link> <Image src={OpenSVG} alt="Open SVG" width={8} height={13} />
        <Link href="/products"> Products</Link>{" "}
        <Image src={OpenSVG} alt="Open SVG" width={8} height={13} />
        <p>{fields.headline}</p>
      </div>
      <div className="pages-banner-content">
        <Image
          src={fields.image}
          alt="Product Icon"
          className="banner-content-icon"
          width={380}
          height={374}
        />
        <div className="banner-content-text">
          <div className="banner-content-header">
            <Image src={fields.image} alt="Product Icon" width={380} height={374} />
            <h1>{fields.headline}</h1>
          </div>
          <p>{fields.subheadline}</p>
          <div className="banner-content-buttons">
            <Link href={fields.button_url_2} role="button">
              <button className="product-banner-btn banner-btn-left">
                {fields.button_label_2}
              </button>
            </Link>
            <Link href={fields.button_url}>
              <button className="product-banner-btn banner-btn-right">
                <Image src={PhoneSVG} alt="image" width={19} height={19} />
                {fields.button_label}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="why-choose-us">
      <div>
        <h2>{fields.headline}</h2>
        <div className="why-choose-us-content">
          <p>{fields.subheadline}</p>
          <Link href={fields.button_url}>
            <button className="why-choose-us-button">{fields.button_label}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
