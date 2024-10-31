import ArrowIcon from "assets/icons/ArrowIcon";
import Typography from "ui/Typography/Typography";
import classes from "./Button.module.scss";

const Button = ({
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

export default Button;
