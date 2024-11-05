import { Main } from "modules/index";
import { useTranslation } from "react-i18next";
import { Button, Typography } from "ui/index";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Main />
      <Typography variant="h1">{t("homePage.hello")}</Typography>
      <Button text="Button" />
    </div>
  );
};
