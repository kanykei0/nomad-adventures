import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import classes from "./SwitchLanguage.module.scss";

const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  const LANGUAGE_KEY = "selectedLanguage";

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem(LANGUAGE_KEY, language);
  };

  const handleChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div className={classes.block}>
      <select
        name="select"
        className={classes.select}
        onChange={handleChange}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
};

export default SwitchLanguage;
