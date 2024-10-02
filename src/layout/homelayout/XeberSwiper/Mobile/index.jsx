import React, { useRef } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "./index.module.scss";

function XeberlerSwiperMobile() {
  const upperSwiperRef = useRef(null);
  const lowerSwiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (upperSwiperRef.current) upperSwiperRef.current.swiper.autoplay.stop();
    if (lowerSwiperRef.current) lowerSwiperRef.current.swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (upperSwiperRef.current) upperSwiperRef.current.swiper.autoplay.start();
    if (lowerSwiperRef.current) lowerSwiperRef.current.swiper.autoplay.start();
  };

  return (
    <div
      className={style.box}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        ref={upperSwiperRef}
        className={`${style.container} ${style.upper}`}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={41}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        navigation={{
          prevEl: "#prevBtn",
          nextEl: "#nextBtn",
        }}
        breakpoints={{
          300: {
            spaceBetween: 21,
          },
          400: {
            spaceBetween: 41
          }
        }}
      >
        <div className={`${style.paginationBox} paginationCon`}></div>
        {[1, 2, 3, 2, 1, 3].map((_, i) => (
          <SwiperSlide key={i}>
            <div className={style.imgBox}>
              <img src={"https://www.everwallpaper.co.uk/cdn/shop/collections/marble-wallpaper-mural-living-room.jpg?v=1660199303"} />
              <p className={style.xeberler}>Xəbərlər</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        ref={lowerSwiperRef}
        className={`${style.container} ${style.lower}`}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={41}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        navigation={{
          prevEl: "#prevBtn",
          nextEl: "#nextBtn",
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            spaceBetween: 21,
          },
          400: {
            spaceBetween: 41
          }
        }}
      >
        <div className={`${style.paginationBox} paginationCon`}></div>
        {[1, 2, 3, 2].map((_, i) => (
          <SwiperSlide key={i}>
            <div className={style.content}>
              <p className={style.title}>{"Naxçıvanda Milli Mətbuat Günü münasibətilə tədbir keçirilib."}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default XeberlerSwiperMobile;
