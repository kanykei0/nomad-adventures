import { AboutUsBlock, Contact, Main, Slider } from "modules/index";
import { Container, Heading, MotoCard, ToursCard } from "ui/index";
import { MotoList, PATHS, ToursList } from "utils/Constants/Constants";

export const Home = () => {
  return (
    <div>
      <Main />
      <Container>
        <AboutUsBlock />
        <Heading withBtn={PATHS.ourMotorbikes}>Our Motorbikes</Heading>
        <Slider list={MotoList.slice(0, 6)} Card={MotoCard} />
        <Heading withBtn={PATHS.tours}>Tours</Heading>
        <Slider list={ToursList.slice(0, 6)} Card={ToursCard} />
        <Contact />
      </Container>
    </div>
  );
};
