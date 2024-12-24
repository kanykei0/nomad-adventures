import { Typography } from "ui/index";
import classes from "./ServiceCard.module.scss";
import { useTranslation } from "react-i18next";

export const ServiceCard = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div className={classes.service}>
      <div className={classes.img}>
        <img src={item.icon} alt={item.title} />
      </div>
      <div className={classes.info}>
        <Typography weight="medium" color="primary" variant="h4">
          {t(item.title)}
        </Typography>
        <Typography>{t(item.desc)}</Typography>
      </div>
    </div>
  );
};
