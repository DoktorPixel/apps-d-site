"use client";
import { useState } from "react";
import FullScreenImageModal from "@/app/helps/full-screenImage-modal";
import Template from "public/img/products/product-pages/SmartIssueTemplates/Template.png";
import Image from "next/image";

function TwoColumnWithImage({ fields }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  const openModal = imageUrl => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const isImageLeft = fields.image_position === "left";

  return (
    <div className="article-first-wrapper">
      <div
        className="product-article-first"
        style={{
          flexDirection: isImageLeft ? "row" : "row-reverse",
        }}
      >
        <Image
          src={fields.image}
          alt="Template"
          className="product-article-img"
          // onClick={() => openModal(Template)}
          width={630}
          height={353}
        />
        {isModalOpen && <FullScreenImageModal imageUrl={fields.image} onClose={closeModal} />}
        <div>
          <h2 className="product-article-header">
            <span className="text-blue">{fields.headline}</span>
          </h2>
          <img src={fields.image} alt="Template" className="product-article-img-mobile" />
          <div className="product-article-text">
            <div dangerouslySetInnerHTML={{ __html: fields.subheadline }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoColumnWithImage;
