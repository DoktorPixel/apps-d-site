import "@/app/helps/full-screenImage-modal.css";
import Image from "next/image";
import { useState } from "react";
import Close from "public/img/close_default.svg";
import CloseHover from "public/img/close_hover.svg";

function FullScreenImageModal({ imageUrl, onClose }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="fullscreen-modal">
      <div className="modal-content">
        <Image src={imageUrl} alt="Full Screen" onClick={onClose} />
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          onClick={onClose}
          className="closeModalButton"
        >
          <Image src={isHovered ? CloseHover : Close} alt="Close" />
        </button>
      </div>
    </div>
  );
}

export default FullScreenImageModal;
