import { useNavigate } from "react-router-dom";
import { Button, Typography } from "..";
import classes from "./Heading.module.scss";

export const Heading = ({ children, withBtn }) => {
  const navigate = useNavigate();

  return (
    <div className={withBtn && classes.block}>
      <Typography className={classes.heading} variant="head">
        {children}
      </Typography>
      {withBtn && (
        <Button
          variant="empty"
          size="medium"
          text="See more"
          onClick={() => navigate(withBtn)}
        />
      )}
    </div>
  );
};
