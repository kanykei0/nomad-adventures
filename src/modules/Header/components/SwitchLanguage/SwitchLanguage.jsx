import { useTranslation } from "react-i18next";
import classes from "./SwitchLanguage.module.scss";

const SwitchLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div className={classes.block}>
      <select name="select" className={classes.select} onChange={handleChange}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
};

export default SwitchLanguage;
