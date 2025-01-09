import { Button, Typography } from "ui/index";
import classes from "./NotFound.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={classes.block}>
      <div className={classes.innerBlock}>
        <Typography className={classes.title} variant="h2" weight="bold">
          {t("404.title")}
        </Typography>

        <Typography variant="h3" className={classes.text1}>
          {t("404.text1")}
        </Typography>

        <Typography variant="h3" className={classes.text2}>
          {t("404.text2")}
        </Typography>

        <Button
          className={classes.btn}
          text={t("404.btn")}
          size="large"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};
