import { Link } from "react-router-dom";
import { Typography } from "..";
import classes from "./MotoCard.module.scss";

export const MotoCard = ({ items }) => {
  const { id, title, image, year, type, make, cost_1, cost_2 } = items;

  return (
    <div className={classes.card}>
      <Link to={id}>
        <div className={classes.card_img}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.info_motoList}>
          <div className={classes.info_motoItem}>
            <Typography variant="body">YEAR</Typography>
            <Typography variant="body" className={classes.info_motoItem_info}>
              {year}
            </Typography>
          </div>
          <div className={`${classes.info_motoItem} ${classes.separator}`}>
            <Typography variant="body">TYPE</Typography>
            <Typography variant="body" className={classes.info_motoItem_info}>
              {type}
            </Typography>
          </div>
          <div className={classes.info_motoItem}>
            <Typography variant="body">MAKE</Typography>
            <Typography variant="body" className={classes.info_motoItem_info}>
              {make}
            </Typography>
          </div>
        </div>
        <table className={classes.info_rent}>
          <tbody>
            <tr>
              <td className={classes.info_rent_days}>1 to 9 days</td>
              <td className={classes.info_rent_cost}>${cost_1} day</td>
            </tr>
            <tr>
              <td className={classes.info_rent_days}>More than 10 days</td>
              <td className={classes.info_rent_cost}>${cost_2} day</td>
            </tr>
          </tbody>
        </table>
      </Link>
    </div>
  );
};
