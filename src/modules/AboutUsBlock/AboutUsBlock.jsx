import horses from "assets/images/horses.jpg";
import kelsuu from "assets/images/kelsuu.jpg";
import manBike from "assets/images/manOnBike.jpg";
import { useTranslation } from "react-i18next";
import { Typography } from "ui/index";
import { AboutServicesList } from "utils/Constants/Constants";
import classes from "./AboutUsBlock.module.scss";
import { ServiceCard } from "./components/ServiceCard/ServiceCard";

export const AboutUsBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.block}>
      <div className={classes.image}>
        <img src={manBike} alt="bike" />
      </div>
      <div className={classes.info}>
        <Typography
          variant="h4"
          weight="bold"
          color="primary"
          className={classes.lilTitle}
        >
          {t("aboutUsBlock.takingRidesTitle")}
        </Typography>
        <Typography variant="head" className={classes.title}>
          {t("aboutUsBlock.greatPerformanceTitle")}
        </Typography>
        <div className={classes.imageInvise}>
          <img src={manBike} alt="bike" />
        </div>
        <Typography className={classes.desc}>
          {t("aboutUsBlock.description")}
        </Typography>
        <div className={classes.services}>
          {AboutServicesList.map((item, key) => (
            <ServiceCard key={key} item={item} />
          ))}
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={`${classes.bottom_image} ${classes.bottom_imageLeft}`}>
          <img src={kelsuu} alt="bike" />
        </div>
        <div className={`${classes.bottom_image}`}>
          <img src={horses} alt="bike" />
        </div>
      </div>
    </div>
  );
};
