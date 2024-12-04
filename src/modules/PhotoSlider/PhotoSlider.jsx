import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import classes from "./PhotoSlider.module.scss";

export const PhotoSlider = ({ list }) => {
  return (
    <div className={classes.block}>
      <Swiper
        className={classes.swiper}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
      >
        {list.map((item, key) => (
          <SwiperSlide className={classes.slide} key={key}>
            <div className={classes.image}>
              <img src={item} alt={key} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
