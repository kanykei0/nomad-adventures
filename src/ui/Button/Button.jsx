import ArrowIcon from "assets/icons/ArrowIcon";
import classes from "./Button.module.scss";
import { Typography } from "ui/Typography/Typography";

export const Button = ({
  variant = "primary",
  text,
  size,
  className,
  onClick,
  rounded,
}) => {
  const classNameGenerated = [
    classes.button,
    classes[variant],
    classes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <button className={classNameGenerated} onClick={onClick}>
      {rounded ? (
        <ArrowIcon />
      ) : (
        <Typography variant="button">{text}</Typography>
      )}
    </button>
  );
};
