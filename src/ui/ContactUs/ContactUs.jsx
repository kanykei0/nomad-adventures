import { ContactBlock } from "utils/Constants/Constants";
import { Typography } from "..";
import classes from "./ContactUs.module.scss";

export const ContactUs = ({ bgWhite }) => {
  return (
    <div className={`${bgWhite ? classes.bgWhite : classes.info}`}>
      {bgWhite && (
        <Typography variant="h2" color="primary" weight="bold">
          Learn more about kyrgyzstan by choosing the right path for travel
        </Typography>
      )}
      <div className={classes.contact}>
        <Typography
          className={classes.contact_title}
          variant="h3"
          weight="regular"
        >
          Contact us
        </Typography>
        {ContactBlock.map((data, key) => (
          <div
            key={key}
            className={`${classes.contact_card} ${
              key === 0 ? "" : classes.contact_wrap
            }`}
          >
            <div className={key === 2 ? classes.contact_card_icon_last : ""}>
              {data.icon}
            </div>
            <div className={classes.contact_card_info}>
              {data.data.map((item, key) => (
                <a href={item.link} key={key} className={classes.link}>
                  <Typography className={classes.link_text}>
                    {item.name}
                  </Typography>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
