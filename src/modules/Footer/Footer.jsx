import { Container, Typography } from "ui/index";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { PATHS, SocialMediaLinks } from "utils/Constants/Constants";
import Logo from "assets/images/logoWhite.svg";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.block}>
          <div className={classes.footer_inner}>
            <div className={classes.footer_inner__logo}>
              <Link to={PATHS.home}>
                <img alt="nomad aventures logo" src={Logo} />
              </Link>
            </div>
            <div className={classes.socialLink}>
              {SocialMediaLinks.map((item, key) => (
                <a key={key} href={item.link}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className={classes.footer_bottom}>
            <Typography>
              © 2024 NomadAdventures, Inc. All rights reserved.
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};
