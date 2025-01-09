import { ContactUs, Typography } from "ui/index";
import classes from "./Contact.module.scss";
import yurta from "assets/images/yurtaa.jpeg";

export const Contact = () => {
  return (
    <div className={classes.block}>
      <div className={classes.images}>
        <Typography className={classes.text} color="white" weight="ultraLight">
          Moto rent bishkek
        </Typography>
        <div className={classes.image}>
          <img loading="lazy" src={yurta} alt="Kyrgyzstan" />
        </div>
      </div>
      <ContactUs bgWhite />
    </div>
  );
};
