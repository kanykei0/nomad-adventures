import Main from "modules/Main/Main";
import { useTranslation } from "react-i18next";
import Button from "ui/Button/Button";
import Typography from "ui/Typography/Typography";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Main />
      <Typography variant="h1">{t("homePage.hello")}</Typography>
      <Button text="Button" />
    </div>
  );
};

export default Home;
