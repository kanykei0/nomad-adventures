import { Container, Heading, Typography } from "ui/index";
import classes from "./AboutUs.module.scss";
import photo from "assets/images/aboutus.jpg";
import photo1 from "assets/images/aboutus1.jpg";
import { useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className={classes.block}>
        <Heading>{t("nav.aboutUs")}</Heading>
        <div className={classes.wrapper}>
          <div className={classes.textBlock}>
            <Typography weight="regular">{t("aboutUs.text1")}</Typography>
            <Typography className={classes.chooseUs} weight="medium">
              {t("aboutUs.text2")}
            </Typography>
            <ol className={classes.olList}>
              <li>
                <Typography weight="regular">{t("aboutUs.text3")}</Typography>
              </li>
              <Typography weight="regular" className={classes.olList_desc}>
                {t("aboutUs.text4")}
              </Typography>
              <li>
                <Typography weight="regular">{t("aboutUs.text5")}</Typography>
              </li>
              <Typography weight="regular" className={classes.olList_desc}>
                {t("aboutUs.text6")}
              </Typography>
              <li>
                <Typography weight="regular">{t("aboutUs.text7")}</Typography>
              </li>
              <Typography weight="regular" className={classes.olList_desc}>
                {t("aboutUs.text8")}
              </Typography>
              <li>
                <Typography weight="regular">{t("aboutUs.text9")}</Typography>
              </li>
              <Typography weight="regular" className={classes.olList_desc}>
                {t("aboutUs.text10")}
              </Typography>
            </ol>
          </div>
          <div className={classes.imageBlock}>
            <img src={photo} alt="about us" />
          </div>
        </div>
        <div className={classes.bottomImage}>
          <img src={photo1} alt="sbout us" />
        </div>
      </div>
    </Container>
  );
};
