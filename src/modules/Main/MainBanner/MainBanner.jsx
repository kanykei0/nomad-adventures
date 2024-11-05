import { Container } from "ui/index";
import classes from "./MainBanner.module.scss";

const MainBanner = () => {
  return (
    <div className={classes.block}>
      <div className={classes.imgBlock}>
        <Container></Container>
      </div>
    </div>
  );
};

export default MainBanner;
