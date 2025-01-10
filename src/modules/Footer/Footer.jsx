import { Container, Logo, Typography } from "ui/index";
import classes from "./Footer.module.scss";
import { SocialMediaLinks } from "utils/Constants/Constants";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.block}>
          <div className={classes.footer_inner}>
            <div className={classes.footer_inner__logo}>
              <Logo footer />
            </div>
            <div className={classes.socialLink}>
              {SocialMediaLinks.map((item, key) => (
                <a key={key} href={item.link} target="_blank">
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
