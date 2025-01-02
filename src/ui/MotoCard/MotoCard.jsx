import { Link } from "react-router-dom";
import { Typography } from "..";
import classes from "./MotoCard.module.scss";
import { useTranslation } from "react-i18next";

export const MotoCard = ({ items, large }) => {
  const { t } = useTranslation();
  const { id, title, images, cost_1, cost_2 } = items;

  return (
    <div className={`${classes.card} ${large && classes.cardLarge}`}>
      <Link to={"/our-motorbikes/" + id}>
        <div className={classes.card_img}>
          <img src={images[0]} alt={title} />
        </div>
        <div className={classes.info_motoList}>
          <Typography
            variant="h4"
            weight="medium"
            className={classes.motoTitle}
          >
            {title}
          </Typography>
        </div>
        <table className={classes.info_rent}>
          <tbody>
            <tr>
              <td className={classes.info_rent_days}>
                <Typography>{t("motoMore.dayLess")}</Typography>
              </td>
              <td className={classes.info_rent_cost}>
                <Typography>
                  ${cost_1} {t("motoMore.day")}
                </Typography>
              </td>
            </tr>
            <tr>
              <td className={classes.info_rent_days}>
                <Typography>{t("motoMore.dayMore")}</Typography>
              </td>
              <td className={classes.info_rent_cost}>
                <Typography>
                  ${cost_2} {t("motoMore.day")}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </Link>
    </div>
  );
};
