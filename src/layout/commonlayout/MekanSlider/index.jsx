import React, { useState } from 'react';
import style from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MekanCard from '../../../components/common components/MekanCard';
import MekanData from '../../../Data/MekanData';

function MekanSlider({ title = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesPerView = 3;
  const totalSlides = 4;

  return (
    <div className={style.container}>
      <div className={style.titleBox}>
        <h2 className={style.title}>{title}</h2>
      </div>
      <Swiper
        className={style.content}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={50}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Using realIndex to track correct active slide
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          200: {
            spaceBetween: 50,
            slidesPerView: 1,
          },
          992: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
      >
        {MekanData.map((item, i) => {
          const isCenterSlide =
            (i === (activeIndex + Math.floor(slidesPerView / 2)) % totalSlides);

          return (
            <SwiperSlide
              key={i}
              className={`${style.slide} ${isCenterSlide ? style.active : ''}`}
            >
              <MekanCard
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.info[0].context}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MekanSlider;
