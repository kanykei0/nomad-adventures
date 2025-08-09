import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import classes from "./SwitchLanguage.module.scss";
import { Typography } from "ui/";

const SwitchLanguage = () => {
  const { i18n } = useTranslation();
   const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
  };

  return (
    <div className={classes.block}>
      <select
        name="select"
        className={classes.select}
        onChange={handleChange}
        value={i18n.language}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
      <span className={classes.arrow}></span>
    </div>
  );
};

export default SwitchLanguage;
