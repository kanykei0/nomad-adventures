import { Container, Heading, MotoCard } from "ui/index";
import classes from "./OurMotorbikes.module.scss";
import { MotoList } from "utils/Constants/Constants";

export const OurMotorbikes = () => {
  return (
    <Container>
      <div className={classes.block}>
        <Heading className={classes.title}>Our Motorbikes</Heading>
        <div className={classes.list}>
          {MotoList.map((item, key) => (
            <MotoCard key={key} items={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};
