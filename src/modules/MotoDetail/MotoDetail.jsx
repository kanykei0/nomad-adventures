import { useNavigate, useParams } from "react-router-dom";
import { PhotoSlider } from "modules/PhotoSlider/PhotoSlider";
import { MotoList } from "utils/Constants/Constants";
import classes from "./MotoDetail.module.scss";
import { MotoCard, Typography } from "ui/index";
import { Characteristics } from "./components/Characteristics";
import { Slider } from "..";
import { ArrowIcon } from "assets/icons";

export const MotoDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const motoData = MotoList[id];

  return (
    <div className={classes.block}>
      <button onClick={() => navigate(-1)} className={classes.btn}>
        <ArrowIcon color="#232323" />
        <Typography variant="h4" weight="medium">
          Назад
        </Typography>
      </button>
      <div className={classes.wrapper}>
        <PhotoSlider list={motoData.images} />
        <div className={classes.description}>
          <Typography color="primary" variant="h2" weight="bold">
            {motoData.title}
          </Typography>
          <Typography weight="regular" className={classes.description_text}>
            {motoData.description}
          </Typography>
          <table className={classes.info_rent}>
            <tbody>
              <tr>
                <td className={classes.info_rent_days}>1 to 9 days</td>
                <td className={classes.info_rent_cost}>
                  ${motoData.cost_1} day
                </td>
              </tr>
              <tr>
                <td className={classes.info_rent_days}>More than 10 days</td>
                <td className={classes.info_rent_cost}>
                  ${motoData.cost_2} day
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Characteristics data={motoData.characteristics} type={motoData.type} />
      <Slider list={MotoList} Card={MotoCard} />
    </div>
  );
};
