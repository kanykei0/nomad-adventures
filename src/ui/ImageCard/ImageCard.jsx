import classes from "./ImageCard.module.scss";

export const ImageCard = ({ items, onClick, index }) => {
  return (
    <div className={classes.card} onClick={() => onClick?.(index)}>
      <img src={items} alt="Kyrgyzstan" />
    </div>
  );
};
