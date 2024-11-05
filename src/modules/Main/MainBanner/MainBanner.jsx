import { Container, Typography } from "ui/index";
import classes from "./MainBanner.module.scss";

const MainBanner = () => {
  return (
    <div className={classes.block}>
      <div className={classes.imgBlock}>
        <Container>
          <Typography
            color="primary"
            variant="h1"
            weight="bold"
            className={classes.title}
          >
            Nomad adventures
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default MainBanner;
