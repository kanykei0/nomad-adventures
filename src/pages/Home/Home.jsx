import { AboutUsBlock, Contact, ImageModal, Main, Slider } from "modules/index";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Heading, ImageCard, MotoCard, ToursCard } from "ui/index";
import { MotoList, PATHS } from "utils/Constants/Constants";
import { lastGallery } from "utils/Constants/Gallery";
import { ToursList } from "utils/Constants/ToursDataConstant";

export const Home = () => {
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
    <div>
      <Main />
      <Container>
        <AboutUsBlock />
        <Heading withBtn={PATHS.ourMotorbikes}>
          {t("nav.ourMotorbikes")}
        </Heading>
        <Slider list={MotoList.slice(0, 6)} Card={MotoCard} />
        <Heading withBtn={PATHS.tours}>{t("nav.tours")}</Heading>
        <Slider list={ToursList.slice(0, 6)} Card={ToursCard} />
        <Heading withBtn={PATHS.placesInKG}>{t("nav.placesInKG")}</Heading>
        <Slider
          list={lastGallery.slice(0, 6)}
          Card={ImageCard}
          onCardClick={openModal}
        />
        <div id="contact-section">
          <Contact />
        </div>
      </Container>

      <ImageModal
        images={lastGallery}
        currentIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
