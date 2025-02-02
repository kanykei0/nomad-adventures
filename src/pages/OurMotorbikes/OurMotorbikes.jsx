import { Container, Heading, MotoCard } from "ui/index";
import classes from "./OurMotorbikes.module.scss";
import { MotoList } from "utils/Constants/Constants";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export const OurMotorbikes = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("seo.ourMotorbikes.title")}</title>
        <meta name="description" content={t("seo.ourMotorbikes.description")} />
        <meta name="keywords" content={t("seo.ourMotorbikes.keywords")} />
        <link
          rel="canonical"
          href="https://moto-rent-bishkek.com/our-motorbikes"
        />
      </Helmet>

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
    </>
  );
};
