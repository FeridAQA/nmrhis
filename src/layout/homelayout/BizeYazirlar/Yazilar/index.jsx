import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import YaziData from '../../../../Data/YaziData';
import style from "./index.module.scss";
import YaziCard from '../YaziCard';

function Yazilar() {
  return (
    <div className={style.container}>
      <Swiper
        className={style.content}
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={32}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        {YaziData.map((item, i) => {
          return (
            <SwiperSlide key={i} className={`${style.slide}`}>
              <YaziCard {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Yazilar
