import { useNavigate, useParams } from "react-router-dom";
import classes from "./TourDetailPage.module.scss";
import { Container, ToursCard, Typography } from "ui/index";
import { ArrowIcon, LocationIcon } from "assets/icons";
import { PhotoSlider, Slider } from "modules/index";
import { ToursList } from "utils/Constants/ToursDataConstant";
import { useTranslation } from "react-i18next";

export const TourDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const tourData = ToursList[id];

  return (
    <div className={classes.block}>
      <Container>
        <button onClick={() => navigate(-1)} className={classes.btn}>
          <ArrowIcon color="#232323" />
          <Typography variant="h4" weight="medium" className={classes.backBtn}>
            {t("back")}
          </Typography>
        </button>
      </Container>

      <PhotoSlider long list={tourData.images} />

      <Container>
        <div className={classes.titleBlock}>
          <LocationIcon color="#b82026" />
          <Typography
            className={classes.title}
            variant="h2"
            color="primary"
            weight="bold"
          >
            {t(tourData.title)}
          </Typography>
        </div>
        <Typography>{t(tourData.description)}</Typography>

        <div className={classes.routesList}>
          {tourData.routes.map((item, key) => (
            <a
              target="_blank"
              href={item.link}
              key={key}
              className={classes.routeItem}
            >
              <Typography variant="h5" color="primary" weight="medium">
                {item.tourType}:
              </Typography>
              <Typography className={classes.routeItem_link}>
                {item.link}
              </Typography>
            </a>
          ))}
        </div>

        <Slider list={ToursList} Card={ToursCard} />
      </Container>
    </div>
  );
};
