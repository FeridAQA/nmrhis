import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MekanCard from '../MekanCard';
import style from './index.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function MekanSliderWithNav() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesPerView = 3;
  const totalSlides = 8; // Number of slides

  return (
    <div className={style.container}>
      <Swiper
        className={style.content}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={64}
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
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          300: {
            spaceBetween: 20,
          },
          400: {
            spaceBetween: 30,
          },
          500: {
            spaceBetween: 40,
          },
          768: {
            spaceBetween: 64,
          },
        }}
      >
        {Array.from({ length: totalSlides }, (_, i) => {
          const isCenterSlide =
            (i === (activeIndex + Math.floor(slidesPerView / 2)) % totalSlides);

          return (
            <SwiperSlide
              key={i}
              className={`${style.slide} ${isCenterSlide ? style.active : ''}`} // Apply active class conditionally
            >
              <MekanCard
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
                title={'“Azərbaycan Silahlı Qüvvələrinin qüdrəti ilbəil yüksəlir”'}
                image={
                  'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg'
                }
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div ref={prevRef} className={`${style.prevBtn} ${style.navBtn}`}>
        <ArrowBackIcon className={`${style.backIcon} ${style.arrow}`} />
      </div>

      <div ref={nextRef} className={`${style.nextBtn} ${style.navBtn}`}>
        <ArrowForwardIcon className={`${style.forwardIcon} ${style.arrow}`} />
      </div>
    </div>
  );
}

export default MekanSliderWithNav;
