import { Link } from "react-router-dom";
import classes from "./ToursCard.module.scss";
import { Typography } from "..";

export const ToursCard = ({ items }) => {
  const { id, title, description, image, type } = items;

  return (
    <div className={classes.card}>
      <Link to={id}>
        <div className={classes.card_img}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.info}>
          <Typography className={classes.title} variant="h4" weight="semiBold">
            {title}
          </Typography>
          <Typography className={classes.desc} variant="body">
            {description}
          </Typography>
          <div className={classes.type}>
            <Typography color="gray">Type:</Typography>
            <Typography className={classes.type_text}>{type}</Typography>
          </div>
        </div>
      </Link>
    </div>
  );
};
