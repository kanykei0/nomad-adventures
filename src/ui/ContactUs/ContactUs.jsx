import { useTranslation } from "react-i18next";
import { Typography } from "..";
import classes from "./ContactUs.module.scss";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "assets/icons";
import { MailIcon } from "assets/icons/MailIcon";

export const ContactUs = ({ bgWhite }) => {
  const { t } = useTranslation();

  return (
    <div className={`${bgWhite ? classes.bgWhite : classes.info}`}>
      {bgWhite && (
        <Typography variant="h2" color="primary" weight="bold">
          {t("contact.text")}
        </Typography>
      )}
      <div className={classes.contact}>
        <Typography
          className={classes.contact_title}
          variant="h3"
          weight="regular"
        >
          {t("banner.contact")}
        </Typography>

        <div className={`${classes.contact_card} ${classes.contact_wrap}`}>
          <div>
            <WhatsappIcon color="#232323" />
          </div>
          <div className={classes.contact_card_info}>
            <a href="tel:+996559888041" className={classes.link}>
              <Typography className={classes.link_text}>
                +996 559 888 041
              </Typography>
            </a>
            <a href="tel:+996558191997" className={classes.link}>
              <Typography className={classes.link_text}>
                +996 558 191 997
              </Typography>
            </a>
          </div>
        </div>

        <div className={classes.contact_card}>
          <div>
            <InstagramIcon color="#232323" />
          </div>
          <div className={classes.contact_card_info}>
            <a
              target="_blank"
              href="https://www.instagram.com/extreme_888?utm_source=qr&igsh=dm91c3l1bmYxMXJn"
              className={classes.link}
            >
              <Typography className={classes.link_text}>
                @nomad_adventures_888
              </Typography>
            </a>
          </div>
        </div>

        <div className={classes.contact_card}>
          <div className={classes.contact_card_icon_last}>
            <TelegramIcon color="#232323" />
          </div>
          <div className={classes.contact_card_info}>
            <a
              href="https://t.me/extreme_888"
              target="_blank"
              className={classes.link}
            >
              <Typography className={classes.link_text}>
                @extreme_888
              </Typography>
            </a>
          </div>
        </div>

        <div className={classes.contact_card}>
          <div className={classes.contact_card_icon_last}>
            <FacebookIcon color="#232323" size="34" />
          </div>
          <div className={classes.contact_card_info}>
            <a
              href="https://www.facebook.com/share/1B25G5r75f/"
              target="_blank"
              className={classes.link}
            >
              <Typography className={classes.link_text}>Enduro Trip</Typography>
            </a>
          </div>
        </div>

        <div className={`${classes.contact_card} ${classes.emailBlock}`}>
          <div>
            <MailIcon />
          </div>
          <div className={classes.contact_card_info}>
            <a
              href="mailto:nurs200567@gmail.com"
              target="_blank"
              className={classes.link}
            >
              <Typography className={classes.link_text}>
                nurs200567@gmail.com
              </Typography>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
