import BurgerIcon from "assets/icons/BurgerIcon";
import classes from "./BurgerMenu.module.scss";
import { OpenMenu } from "./components/OpenMenu";
import { useEffect, useState } from "react";

const Burger = () => {
  const [isClose, setIsClose] = useState(true);

  useEffect(() => {
    if (!isClose) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isClose]);

  return (
    <>
      <div className={classes.icon} onClick={() => setIsClose(false)}>
        <BurgerIcon />
      </div>
      <OpenMenu isClose={isClose} setIsClose={setIsClose} />
    </>
  );
};

export default Burger;
