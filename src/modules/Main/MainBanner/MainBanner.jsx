import { useTranslation } from "react-i18next";
import { Button, Container, Typography } from "ui/index";
import classes from "./MainBanner.module.scss";

const MainBanner = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.block}>
      <div className={classes.imgBlock}>
        <Container>
          <div className={classes.text}>
            <Typography variant="h1" weight="bold" color="white">
              {t("mainBanner.title")}
            </Typography>
            <Typography
              variant="h4"
              color="white"
              weight="regular"
              className={classes.desc}
            >
              {t("mainBanner.description")}
            </Typography>
            <Button text={t("mainBanner.buttonText")} size="medium" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainBanner;
