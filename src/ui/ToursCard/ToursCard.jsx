import { Link } from "react-router-dom";
import classes from "./ToursCard.module.scss";
import { Typography } from "..";
import { useTranslation } from "react-i18next";

export const ToursCard = ({ items, large }) => {
  const { id, title, shortDesc, images } = items;
  const { t } = useTranslation();

  return (
    <div className={`${classes.card} ${large && classes.cardLarge}`}>
      <Link to={"/tours/" + id}>
        <div className={classes.card_img}>
          <img loading="lazy" src={images[0]} alt={title} />
        </div>
        <div className={classes.info}>
          <Typography className={classes.title} variant="h4" weight="semiBold">
            {t(title)}
          </Typography>
          <Typography className={classes.desc} variant="body">
            {t(shortDesc)}
          </Typography>
          {/* <div className={classes.type}>
            <Typography color="gray">Type:</Typography>
            <Typography className={classes.type_text}>
              {routes.map((item, index) => (
                <span key={item.id || index}>
                  {item.tourType}
                  {index < routes.length - 1 ? ", " : ""}
                </span>
              ))}
            </Typography>
          </div> */}
        </div>
      </Link>
    </div>
  );
};
