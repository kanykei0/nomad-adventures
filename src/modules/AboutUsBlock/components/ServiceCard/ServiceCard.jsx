import { Typography } from "ui/index";
import classes from "./ServiceCard.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const ServiceCard = ({ item }) => {
  const { t } = useTranslation();

  return (
    <Link to={item.path} className={classes.link}>
      <div className={classes.service}>
        <div className={classes.img}>
          <img src={item.icon} alt={item.title} loading="lazy" />
        </div>
        <div className={classes.info}>
          <Typography weight="medium" color="primary" variant="h4">
            {t(item.title)}
          </Typography>
          <Typography>{t(item.desc)}</Typography>
        </div>
      </div>
    </Link>
  );
};
