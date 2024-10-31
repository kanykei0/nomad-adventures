import MainBanner from "./MainBanner/MainBanner";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <div className={classes.block}>
      <MainBanner />
    </div>
  );
};

export default Main;
