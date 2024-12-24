import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import classes from "./Slider.module.scss";
import { useEffect, useRef, useState } from "react";

export const Slider = ({
  list,
  Card,
  children,
  minCardWidth = 270,
  maxCards = 4.2,
}) => {
  const [slidesPerView, setSlidesPerView] = useState(maxCards);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const calculatedSlides = containerWidth / minCardWidth;
        setSlidesPerView(Math.min(calculatedSlides, maxCards));
      }
    };

    updateSlidesPerView();

    const observer = new ResizeObserver(updateSlidesPerView);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [maxCards, minCardWidth]);

  return (
    <div className={classes.block} ref={containerRef}>
      <Swiper
        className={classes.swiper}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        navigation={true}
      >
        {list.map((item, key) => (
          <SwiperSlide className={classes.slide} key={key}>
            {Card ? <Card items={item} /> : children}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
