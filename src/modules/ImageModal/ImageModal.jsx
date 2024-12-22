import { useState, useEffect } from "react";
import classes from "./ImageModal.module.scss";
import { CloseIcon } from "assets/icons";
import { PrevArrowIcon } from "assets/icons/PrevArrowIcon";
import { NextArrowIcon } from "assets/icons/NextArrowIcon";

export const ImageModal = ({ images, currentIndex, isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={classes.modal}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        onClick={onClose}
        className={classes.closeButton}
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      <button
        onClick={handlePrevImage}
        className={`${classes.navButton} ${classes.prev}`}
        aria-label="Previous image"
      >
        <PrevArrowIcon />
      </button>

      <div className={classes.modalContent}>
        <img
          src={images[activeIndex]}
          alt={`Image ${activeIndex + 1}`}
          className={classes.modalImage}
        />
        <div className={classes.imageCounter}>
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      <button
        onClick={handleNextImage}
        className={`${classes.navButton} ${classes.next}`}
        aria-label="Next image"
      >
        <NextArrowIcon />
      </button>
    </div>
  );
};
