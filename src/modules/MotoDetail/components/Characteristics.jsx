import { ContactUs, Typography } from "ui/index";
import classes from "./Characteristics.module.scss";
import { useTranslation } from "react-i18next";

export const Characteristics = ({ data, type }) => {
  const { t } = useTranslation();

  return (
    <div className={classes.block}>
      <Typography variant="h2" weight="bold" color="primary">
        {t("motoMore.charac")}
      </Typography>
      <div className={classes.wrapper}>
        <div className={classes.info}>
          <ul>
            <li className={classes.li}>
              <Typography weight="bold" className={classes.li_name}>
                {t("motoMore.type")}:
              </Typography>
              <Typography weight="regular" className={classes.li_value}>
                {type}
              </Typography>
            </li>
            {data.map((item, key) => (
              <li key={key} className={classes.li}>
                <Typography weight="bold" className={classes.li_name}>
                  {t(item.name)}:
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
