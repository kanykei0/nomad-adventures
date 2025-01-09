import { Typography } from "ui/index";
import classes from "./AboutUsBlock.module.scss";
import manBike from "assets/images/manOnBike.jpg";
import { AboutServicesList } from "utils/Constants/Constants";
import { ServiceCard } from "./components/ServiceCard/ServiceCard";
import horses from "assets/images/horses.jpg";
import kelsuu from "assets/images/kelsuu.jpg";
import { useTranslation } from "react-i18next";

export const AboutUsBlock = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.block}>
      <div className={classes.image}>
        <img src={manBike} alt="bike" loading="lazy" />
      </div>
      <div className={classes.info}>
        <Typography
          variant="h4"
          weight="bold"
          color="primary"
          className={classes.lilTitle}
        >
          {t("aboutBlock.title1")}
        </Typography>
        <Typography variant="head" className={classes.title}>
          {t("aboutBlock.title2")}
        </Typography>
        <div className={classes.imageInvise}>
          <img src={manBike} alt="bike" loading="lazy" />
        </div>
        <Typography className={classes.desc}>{t("aboutBlock.desc")}</Typography>
        <div className={classes.services}>
          {AboutServicesList.map((item, key) => (
            <ServiceCard key={key} item={item} />
          ))}
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={`${classes.bottom_image} ${classes.bottom_imageLeft}`}>
          <img src={kelsuu} alt="bike" loading="lazy" />
        </div>
        <div className={`${classes.bottom_image}`}>
          <img src={horses} alt="bike" loading="lazy" />
        </div>
      </div>
    </div>
  );
};
