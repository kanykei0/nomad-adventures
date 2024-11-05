import MainBanner from "./MainBanner/MainBanner";
import classes from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={classes.block}>
      <MainBanner />
    </div>
  );
};
