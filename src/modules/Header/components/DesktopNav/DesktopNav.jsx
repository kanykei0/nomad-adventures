import { NavigationData } from "utils/Constants/Constants";
import Typography from "ui/Typography/Typography";
import { useTranslation } from "react-i18next";
import classes from "./DesktopNav.module.scss";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  const { t } = useTranslation();

  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        {NavigationData.map((nav, index) => (
          <li key={index} className={classes.li}>
            <Link to={nav.path}>
              <Typography className={classes.text}>{t(nav.text)}</Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
