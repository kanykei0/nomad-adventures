import { Typography } from "ui/index";
import classes from "./Contact.module.scss";
import yurta from "assets/images/yurtaa.jpeg";

export const Contact = () => {
  return (
    <div className={classes.block}>
      <div className={classes.images}>
        <Typography className={classes.text} color="white" weight="ultraLight">
          Nomad adventures
        </Typography>
        <div className={classes.image}>
          <img src={yurta} alt="Kyrgyzstan" />
        </div>
      </div>
      <div className={classes.info}>
        <Typography variant="h2">
          Learn more about kyrgyzstan by choosing the right path for travel
        </Typography>
      </div>
    </div>
  );
};
