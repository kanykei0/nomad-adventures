import { useState, useEffect } from "react";
import { Container, Heading } from "ui/index";
import classes from "./PlacesInKG.module.scss";
import { ImageModal } from "modules/index";
import { useTranslation } from "react-i18next";
import { Gallery } from "utils/Constants/Gallery";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <title>{t("seo.gallery.title")}</title>
        <meta name="description" content={t("seo.gallery.description")} />
        <meta name="keywords" content={t("seo.gallery.keywords")} />
        <link
          rel="canonical"
          href="https://moto-rent-bishkek.com/places-in-Kyrgyzstan"
        />
      </Helmet>

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
                <img src={path} alt={`Image ${index + 1}`} />
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
    </>
  );
};
