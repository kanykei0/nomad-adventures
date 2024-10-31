import Typography from "ui/Typography/Typography";
import classes from "./MainBanner.module.scss";
import Container from "ui/Container/Container";

const MainBanner = () => {
  return (
    <div className={classes.block}>
      <div className={classes.imgBlock}>
        <Container>
          <Typography
            color="primary"
            variant="h1"
            font="play"
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
