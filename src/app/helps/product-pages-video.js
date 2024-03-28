function ProductPagesVideo({ videoUrl }) {
  return (
    <div>
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
  );
}

export default ProductPagesVideo;
