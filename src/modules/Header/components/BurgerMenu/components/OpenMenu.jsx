import { NavigationData, PATHS } from "utils/Constants/Constants";
import classes from "./OpenMenu.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "assets/images/logo.svg";
import { CloseIcon } from "assets/icons/CloseIcon";
import { Typography } from "ui/index";

export const OpenMenu = ({ isClose, setIsClose }) => {
  const { t } = useTranslation();

  return (
    <div className={`${classes.backdrop} ${isClose && classes.menuClose}`}>
      <div className={classes.nav}>
        <div className={classes.navTop}>
          <div className={classes.navTop_logo}>
            <Link to={PATHS.home} className={classes.logoBlock}>
              <img alt="nomad aventures logo" src={Logo} />
            </Link>
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
