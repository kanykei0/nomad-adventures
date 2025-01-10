import { Link } from "react-router-dom";
import classes from "./Logo.module.scss";
import { PATHS } from "utils/Constants/Constants";
import { Typography } from "..";
import { LogoIcon } from "assets/icons";

export const Logo = ({ footer }) => {
  return (
    <Link
      to={PATHS.home}
      className={`${classes.link} ${footer && classes.footer}`}
    >
      <div className={classes.block}>
        <div className={classes.icon}>
          <LogoIcon />
        </div>
        <div className={classes.line} />
        <div className={classes.logo_name}>
          <Typography variant="h3">MOTO RENT</Typography>
        </div>
      </div>
    </Link>
  );
};
