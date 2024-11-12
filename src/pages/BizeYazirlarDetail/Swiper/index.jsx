import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import YaziData from '../../../Data/YaziData';
import YaziCard from '../../BizeYazirlar/YaziCard';
import style from "./index.module.scss";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BizeYazirlarSwiper() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={style.container}>
      <Swiper
        className={style.content}
        modules={[Autoplay, Navigation]}
        slidesPerView={3}
        spaceBetween={32}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
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
              <YaziCard truncate={true} {...item} />
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

export default BizeYazirlarSwiper
