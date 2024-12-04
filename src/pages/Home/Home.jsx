import { AboutUsBlock, Contact, Main, Slider } from "modules/index";
import { Container, Heading, MotoCard, ToursCard } from "ui/index";
import { MotoList, ToursList } from "utils/Constants/Constants";

export const Home = () => {
  return (
    <div>
      <Main />
      <Container>
        <AboutUsBlock />
        <Heading withBtn="/about-us">Our Motorbikes</Heading>
        <Slider list={MotoList} Card={MotoCard} />
        <Heading withBtn="/about-us">Tours</Heading>
        <Slider list={ToursList} Card={ToursCard} />
        <Contact />
      </Container>
    </div>
  );
};
