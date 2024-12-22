import { Link } from "react-router-dom";
import { Typography } from "..";
import classes from "./MotoCard.module.scss";

export const MotoCard = ({ items }) => {
  const { id, title, images, cost_1, cost_2 } = items;

  return (
    <div className={classes.card}>
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
                <Typography>1 to 9 days</Typography>
              </td>
              <td className={classes.info_rent_cost}>
                <Typography>${cost_1} day</Typography>
              </td>
            </tr>
            <tr>
              <td className={classes.info_rent_days}>
                <Typography>More than 10 days</Typography>
              </td>
              <td className={classes.info_rent_cost}>
                <Typography>${cost_2} day</Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </Link>
    </div>
  );
};
