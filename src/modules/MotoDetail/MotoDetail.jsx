import { useNavigate, useParams } from "react-router-dom";
import { MotoList } from "utils/Constants/Constants";
import classes from "./MotoDetail.module.scss";
import { MotoCard, Typography } from "ui/index";
import { Characteristics } from "./components/Characteristics";
import { PhotoSlider, Slider } from "..";
import { ArrowIcon } from "assets/icons";
import { useTranslation } from "react-i18next";

export const MotoDetail = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const motoData = MotoList[id];

  return (
    <div className={classes.block}>
      <button onClick={() => navigate(-1)} className={classes.btn}>
        <ArrowIcon color="#232323" />
        <Typography variant="h4" weight="medium" className={classes.backBtn}>
          {t("back")}
        </Typography>
      </button>
      <div className={classes.wrapper}>
        <PhotoSlider list={motoData.images} />
        <div className={classes.description}>
          <Typography color="primary" variant="h2" weight="bold">
            {motoData.title}
          </Typography>
          <Typography weight="medium" className={classes.description_price}>${motoData.cost_1} / {t("motoMore.day")}</Typography>
          <Typography weight="regular" className={classes.description_text}>
            {t(motoData.description)}
          </Typography>
        </div>
      </div>
      <Characteristics data={motoData.characteristics} type={motoData.type} />
      <Slider list={MotoList} Card={MotoCard} />
    </div>
  );
};
