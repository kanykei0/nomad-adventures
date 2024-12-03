import { Container, MotoCard, Typography } from "ui/index";
import classes from "./OurMotorbikes.module.scss";
import { MotoList } from "utils/Constants/Constants";

export const OurMotorbikes = () => {
  return (
    <Container>
      <div className={classes.block}>
        <Typography variant="head">Our Motorbikes</Typography>
        <div className={classes.list}>
          {MotoList.map((item, key) => (
            <MotoCard key={key} items={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};
