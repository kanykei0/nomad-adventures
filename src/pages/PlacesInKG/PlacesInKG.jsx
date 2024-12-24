import { useState, useEffect } from "react";
import { Container, Heading } from "ui/index";
import classes from "./PlacesInKG.module.scss";
import { ImageModal } from "modules/index";

import photo1 from "assets/kyrgyzstanImages/photo1.jpg";
import photo2 from "assets/kyrgyzstanImages/photo2.jpg";
import photo3 from "assets/kyrgyzstanImages/photo3.jpg";
import photo4 from "assets/kyrgyzstanImages/photo4.jpg";
import photo5 from "assets/kyrgyzstanImages/photo5.jpg";
import { useTranslation } from "react-i18next";

const images = [photo1, photo2, photo3, photo4, photo5];

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
          {images.map((path, index) => (
            <div
              key={index}
              className={classes.imageBlock}
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
            >
              <img src={path} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        images={images}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Container>
  );
};
