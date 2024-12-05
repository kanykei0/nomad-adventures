import { Container, Heading, ToursCard } from "ui/index";
import classes from "./Tours.module.scss";
import { ToursList } from "utils/Constants/Constants";

export const Tours = () => {
  return (
    <Container>
      <div className={classes.block}>
        <Heading className={classes.title}>Tours</Heading>
        <div className={classes.list}>
          {ToursList.map((item, key) => (
            <ToursCard key={key} items={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};
