import { NavigationData } from "utils/Constants/Constants";
import classes from "./OpenMenu.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CloseIcon } from "assets/icons/CloseIcon";
import { Logo, Typography } from "ui/index";

export const OpenMenu = ({ isClose, setIsClose, menuRef }) => {
  const { t } = useTranslation();

  return (
    <div className={`${classes.backdrop} ${isClose && classes.menuClose}`}>
      <div className={classes.nav} ref={menuRef}>
        <div className={classes.navTop}>
          <div className={classes.navTop_logo}>
            <Logo />
          </div>
          <div
            className={classes.navTop_close}
            onClick={() => setIsClose(true)}
          >
            <CloseIcon />
          </div>
        </div>
        <div className={classes.navBottom}>
          <ul className={classes.navList}>
            <li>
              <Link to="/">
                <Typography className={classes.navList_text} variant="body">
                  {t("nav.home")}
                </Typography>
              </Link>
            </li>
            {NavigationData.map((nav, key) => (
              <li key={key}>
                <Link to={nav.path}>
                  <Typography className={classes.navList_text} variant="body">
                    {t(nav.text)}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
