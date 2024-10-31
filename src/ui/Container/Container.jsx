import classes from "./Container.module.scss";

const Container = ({ children, header }) => {
  return (
    <div className={`${classes.container} ${header && classes.header}`}>
      {children}
    </div>
  );
};

export default Container;
