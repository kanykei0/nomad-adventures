import { Button, Container, Typography } from "ui/index";
import classes from "./MainBanner.module.scss";

const MainBanner = () => {
  return (
    <div className={classes.block}>
      <div className={classes.imgBlock}>
        <Container>
          <div className={classes.text}>
            <Typography variant="h1" weight="bold" color="white">
              Explore the Kyrgyz Landscapes
            </Typography>
            <Typography
              variant="h4"
              color="white"
              weight="regular"
              className={classes.desc}
            >
              Experience the thrill of riding through the breathtaking mountains
              and valleys of Kyrgyzstan on our motorbikes
            </Typography>
            <Button text="Contact" size="medium" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainBanner;
