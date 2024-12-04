import { truncateString } from "utils/Helpers/Helpers";
import classes from "./Typography.module.scss";
import React from "react";

export const Typography = ({
  font = "",
  variant = "body",
  weight = "",
  children,
  className,
  color = "",
  truncate = 0,
  id,
}) => {
  const Tags = {
    h1: "h1",
    h2: "h2",
    body: "p",
    smallBody: "p",
    extraSmallBody: "p",
  };

  const classNameGenerated = [
    classes[variant],
    classes[weight],
    classes[color],
    classes[font],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const TagName = Tags[variant] || "p";

  const convertNewlinesToBreaks = (text) => {
    if (typeof text === "string") {
      return text.split("\r\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    } else {
      return text;
    }
  };

  return (
    <TagName id={id} className={classNameGenerated}>
      {!truncate
        ? convertNewlinesToBreaks(children)
        : truncateString(children, truncate)}
    </TagName>
  );
};
