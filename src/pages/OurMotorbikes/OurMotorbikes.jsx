import { Container, Heading, MotoCard } from "ui/index";
import classes from "./OurMotorbikes.module.scss";
import { MotoList } from "utils/Constants/Constants";
import { useTranslation } from "react-i18next";

export const OurMotorbikes = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className={classes.block}>
        <Heading className={classes.title}>{t("nav.ourMotorbikes")}</Heading>
        <div className={classes.list}>
          {MotoList.map((item, key) => (
            <MotoCard large key={key} items={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};
