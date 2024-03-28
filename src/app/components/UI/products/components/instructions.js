"use client";
import Link from "next/link";
import Image from "next/image";
function Instructions({ fields }) {
  return (
    <div className="product-article-instructions">
      <div>
        <h2 className="product-article-header instructions-header-butter">
          <span className="text-blue">{fields.headline}</span>
        </h2>
      </div>
      <Link href={fields.product_link} target="blank">
        <Image src={fields.image} alt="Instructions" width={1240} height={678} />
      </Link>
    </div>
  );
}

export default Instructions;
