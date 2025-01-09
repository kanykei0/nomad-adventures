import { useState, useEffect } from "react";
import { Container, Heading } from "ui/index";
import classes from "./PlacesInKG.module.scss";
import { ImageModal } from "modules/index";
import { useTranslation } from "react-i18next";
import { Gallery } from "utils/Constants/Gallery";

export const PlacesInKG = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScreenSmall(window.innerWidth < 500);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const openModal = (index) => {
    if (!isScreenSmall) {
      setCurrentImageIndex(index);
      setIsModalOpen(true);
    }
  };

  return (
    <Container>
      <div className={classes.block}>
        <Heading>{t("nav.placesInKG")}</Heading>
        <div className={classes.imagesList}>
          {Gallery.map((path, index) => (
            <div
              key={index}
              className={classes.imageBlock}
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
            >
              <img loading="lazy" src={path} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        images={Gallery}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Container>
  );
};
