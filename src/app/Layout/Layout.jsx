import { Footer, Header } from "modules/index";
import { Outlet, useLocation } from "react-router-dom";
import classes from "./Layout.module.scss";
import { useEffect } from "react";

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={classes.block}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
