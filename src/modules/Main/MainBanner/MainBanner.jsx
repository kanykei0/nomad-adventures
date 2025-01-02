import { Button, Container, Typography } from "ui/index";
import classes from "./MainBanner.module.scss";
import { useTranslation } from "react-i18next";

const MainBanner = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.block}>
      <div className={classes.imgBlock}>
        <Container>
          <div className={classes.text}>
            <Typography variant="h1" weight="semiBold" color="white">
              {t("banner.title1")}
            </Typography>
            <div className={classes.textWrapper}>
              <Typography variant="h4" weight="bold" color="white">
                {t("banner.title")}
              </Typography>
              <Typography
                variant="h4"
                color="white"
                weight="regular"
                className={classes.desc}
              >
                {t("banner.desc")}
              </Typography>
              <Button
                onClick={scrollToContact}
                text={t("banner.contact")}
                size="medium"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainBanner;
