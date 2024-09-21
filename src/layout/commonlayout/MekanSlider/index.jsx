import React, { useState } from 'react';
import style from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import XeberCard from '../../../components/home components/XeberCard';

function MekanSlider({ title = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesPerView = 3;
  const totalSlides = 8; // Number of slides

  return (
    <div className={style.container}>
      <div className={style.titleBox}>
        <h2 className={style.title}>{title}</h2>
      </div>
      <Swiper
        className={style.content}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={70}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Using realIndex to track correct active slide
        pagination={{
          clickable: true,
        }}
      >
        {Array.from({ length: totalSlides }, (_, i) => {
          // Calculate the center slide considering the total number of slides and loop
          const isCenterSlide =
            (i === (activeIndex + Math.floor(slidesPerView / 2)) % totalSlides);

          return (
            <SwiperSlide
              key={i}
              className={`${style.slide} ${isCenterSlide ? style.active : ''}`} // Apply active class conditionally
            >
              <XeberCard
                date={'22 iyul 2024 16:07'}
                title={'“Azərbaycan Silahlı Qüvvələrinin qüdrəti ilbəil yüksəlir”'}
                image={
                  'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg'
                }
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MekanSlider;
