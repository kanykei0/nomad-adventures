import { ContactUs, Typography } from "ui/index";
import classes from "./Characteristics.module.scss";

export const Characteristics = ({ data, type }) => {
  return (
    <div className={classes.block}>
      <Typography variant="h2" weight="bold" color="primary">
        Characteristics
      </Typography>
      <div className={classes.wrapper}>
        <div className={classes.info}>
          <ul>
            <li className={classes.li}>
              <Typography weight="bold" className={classes.li_name}>
                Type:
              </Typography>
              <Typography weight="regular" className={classes.li_value}>
                {type}
              </Typography>
            </li>
            {data.map((item, key) => (
              <li key={key} className={classes.li}>
                <Typography weight="bold" className={classes.li_name}>
                  {item.name}:
                </Typography>
                <Typography weight="regular" className={classes.li_value}>
                  {item.value}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.contact}>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};
