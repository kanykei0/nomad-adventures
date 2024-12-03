import { Typography } from "ui/index";
import classes from "./AboutUsBlock.module.scss";
import manBike from "assets/images/manOnBike.jpg";
import { AboutServicesList } from "utils/Constants/Constants";
import { ServiceCard } from "./components/ServiceCard/ServiceCard";
import horses from "assets/images/horses.jpg";
import kelsuu from "assets/images/kelsuu.jpg";

export const AboutUsBlock = () => {
  return (
    <div className={classes.block}>
      <div className={classes.image}>
        <img src={manBike} alt="bike" />
      </div>
      <div className={classes.info}>
        <Typography
          variant="h4"
          weight="bold"
          color="primary"
          className={classes.lilTitle}
        >
          Taking rides to a never level
        </Typography>
        <Typography variant="head" className={classes.title}>
          great perfomance matters in future
        </Typography>
        <div className={classes.imageInvise}>
          <img src={manBike} alt="bike" />
        </div>
        <Typography className={classes.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae
          pariatur eligendi sequi, facilis quod! Sit soluta saepe sunt laborum
          esse sint labore assumenda aliquid rerum, obcaecati dolore
          exercitationem hic facere beatae neque facilis dolor tenetur
          consequatur est.
        </Typography>
        <div className={classes.services}>
          {AboutServicesList.map((item, key) => (
            <ServiceCard key={key} item={item} />
          ))}
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={`${classes.bottom_image} ${classes.bottom_imageLeft}`}>
          <img src={kelsuu} alt="bike" />
        </div>
        <div className={`${classes.bottom_image}`}>
          <img src={horses} alt="bike" />
        </div>
      </div>
    </div>
  );
};
