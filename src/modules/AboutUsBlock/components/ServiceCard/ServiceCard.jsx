import { Typography } from "ui/index";
import classes from "./ServiceCard.module.scss";

export const ServiceCard = ({ item }) => {
  return (
    <div className={classes.service}>
      <div className={classes.img}>
        <img src={item.icon} alt={item.title} />
      </div>
      <div className={classes.info}>
        <Typography weight="medium" color="primary" variant="h4">
          {item.title}
        </Typography>
        <Typography>{item.desc}</Typography>
      </div>
    </div>
  );
};
