"use client";
import React from "react";

function ProductPagesVideoUrl({ fields }) {
  let videoUrl = fields.video_link;
  return (
    <>
      {fields.video_link && (
        <div className="product-pages-video ">
          <iframe
            width="1280"
            height="720"
            src={videoUrl}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
}

export default ProductPagesVideoUrl;
