import { AboutUsBlock, Contact, Main, Slider } from "modules/index";
import { useTranslation } from "react-i18next";
import { Container, Heading, MotoCard, ToursCard } from "ui/index";
import { MotoList, PATHS } from "utils/Constants/Constants";
import { ToursList } from "utils/Constants/ToursDataConstant";

export const Home = () => {
  const { t } = useTranslation();

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
        <div id="contact-section">
          <Contact />
        </div>
      </Container>
    </div>
  );
};
