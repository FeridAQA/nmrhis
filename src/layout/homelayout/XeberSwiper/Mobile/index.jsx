import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "./index.module.scss";

function XeberlerSwiperMobile() {
  return (
    <div className={style.box}>
      <Swiper
        className={style.container}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={41}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        loop={true}
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
        {/* Combine image and text content in the same Swiper */}
        {[1, 2, 3, 4].map((_, i) => (
          <SwiperSlide key={i}>
            {/* Upper Content: Image */}
            <div className={style.imgBox}>
              <img src="https://www.everwallpaper.co.uk/cdn/shop/collections/marble-wallpaper-mural-living-room.jpg?v=1660199303" />
              <p className={style.xeberler}>Xəbərlər</p>
            </div>

            {/* Lower Content: Text */}
            <div className={style.content}>
              <p className={style.title}>
                Naxçıvanda Milli Mətbuat Günü münasibətilə tədbir keçirilib.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default XeberlerSwiperMobile;
