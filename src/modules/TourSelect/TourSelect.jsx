import { useState, useEffect, useRef } from "react";
import classes from "./TourSelect.module.scss";
import { Typography } from "ui/index";

export const TourSelect = ({
  options = [],
  defaultValue = "",
  onChange = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.select} ref={selectRef}>
      <div className={classes.select__trigger} onClick={handleTriggerClick}>
        <Typography weight="regular">
          {selectedOption ? selectedOption.label : "Выберите опцию"}
        </Typography>
        <svg
          className={`${classes.select__arrow} ${
            isOpen ? classes["select__arrow--open"] : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className={classes.select__options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${classes.select__option} ${
                selectedOption?.value === option.value
                  ? classes["select__option--selected"]
                  : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              <Typography weight="regular">{option.label}</Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
