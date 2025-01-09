import classes from "./Header.module.scss";
import Burger from "./components/BurgerMenu/BurgerMenu";
import { useState, useEffect } from "react";
import DesktopNav from "./components/DesktopNav/DesktopNav";
import Logo from "assets/images/logo.svg";
import SwitchLanguage from "./components/SwitchLanguage/SwitchLanguage";
import { Link } from "react-router-dom";
import { PATHS } from "utils/Constants/Constants";
import { Container } from "ui/index";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 850px)`);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={classes.topBlock}>
      <div className={classes.block}>
        <div className={classes.innerBlock}>
          <Container>
            <div className={classes.wrapper}>
              <Link to={PATHS.home} className={classes.logoBlock}>
                <img loading="lazy" alt="nomad aventures logo" src={Logo} />
              </Link>
              {!isMobile && <DesktopNav />}
              <div className={classes.langBlock}>
                <SwitchLanguage />
                <div>{isMobile && <Burger />}</div>
              </div>
            </div>
            <div
              className={`${classes.navVisible} ${
                isMobile && classes.navInvisible
              }`}
            ></div>
          </Container>
        </div>
      </div>
    </div>
  );
};
