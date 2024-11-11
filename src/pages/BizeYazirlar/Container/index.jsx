import React, { useRef, useState } from 'react'
import style from "./index.module.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import YaziData from '../../../Data/YaziData';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import YaziCard from '../YaziCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BizeYazirlarContainer() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={style.container}>
      <Swiper
        className={style.content}
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={4}
        spaceBetween={32}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        {YaziData.map((item, i) => {
          const isFirstSlide = (i === activeIndex);

          return (
            <SwiperSlide key={i} className={`${style.slide} ${isFirstSlide ? style.firstSlide : ''}`}>
              <YaziCard {...item} isFirstSlide={isFirstSlide} />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div ref={prevRef} className={`${style.prevBtn} ${style.navBtn}`}>
        <ArrowBackIcon className={`${style.backIcon} ${style.arrow}`} />
      </div>

      <div ref={nextRef} className={`${style.nextBtn} ${style.navBtn}`}>
        <ArrowForwardIcon className={`${style.forwardIcon} ${style.arrow}`} />
      </div>
    </div>
  )
}

export default BizeYazirlarContainer
