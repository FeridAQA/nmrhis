import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './index.module.scss';
import FotoXronikaCard from '../../../components/common components/FotoXronikaCard';

function FotoXronikaSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesPerView = 4;
  const totalSlides = 8;

  return (
    <div className={style.container}>
      <div className={style.titleBox}>
        <h2 className={style.title}>Foto Xronika</h2>
      </div>

      <Swiper
        className={style.content}
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={slidesPerView}
        spaceBetween={36}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          prevEl: "#prevBtn",
          nextEl: "#nextBtn",
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 36
          }
        }}
      >
        {Array.from({ length: totalSlides }, (_, i) => {
          const isCenterSlide =
            (i === (activeIndex + Math.floor(slidesPerView / 2 - 1)) % totalSlides);

          return (
            <SwiperSlide
              key={i}
              className={`${style.slide} ${isCenterSlide ? style.active : ''}`} // Apply active class conditionally
            >
              <FotoXronikaCard
                image={
                  'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg'
                }
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={style.prevBtn} id="prevBtn">
        <ArrowBackIcon className={style.arrow} />
      </div>
      <div className={style.nextBtn} id="nextBtn">
        <ArrowForwardIcon className={style.arrow} />
      </div>
    </div>
  );
}

export default FotoXronikaSlider;
