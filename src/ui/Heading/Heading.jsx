import { useNavigate } from "react-router-dom";
import { Button, Typography } from "..";
import classes from "./Heading.module.scss";
import { useTranslation } from "react-i18next";

export const Heading = ({ children, withBtn }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={withBtn ? classes.block : classes.inner}>
      <Typography className={classes.heading} variant="head">
        {children}
      </Typography>
      {withBtn && (
        <Button
          variant="empty"
          size="medium"
          text={t("seeMore")}
          onClick={() => navigate(withBtn)}
        />
      )}
    </div>
  );
};
