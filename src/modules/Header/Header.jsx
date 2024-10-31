import Container from "ui/Container/Container";
import classes from "./Header.module.scss";
import Burger from "./components/BurgerMenu/BurgerMenu";
import { useState, useEffect } from "react";
import DesktopNav from "./components/DesktopNav/DesktopNav";
import Logo from "assets/images/logo.svg";
import SwitchLanguage from "./components/SwitchLanguage/SwitchLanguage";

const Header = () => {
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
    <div className={classes.block}>
      <Container header>
        <div className={classes.innerBlock}>
          <Container>
            <div className={classes.wrapper}>
              <div className={classes.logoBlock}>
                <img alt="logo" src={Logo} />
              </div>
              <div className={classes.langBlock}>
                <SwitchLanguage />
                <div>{isMobile && <Burger />}</div>
              </div>
            </div>
            <div
              className={`${classes.navVisible} ${
                isMobile && classes.navInvisible
              }`}
            >
              <DesktopNav />
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Header;
