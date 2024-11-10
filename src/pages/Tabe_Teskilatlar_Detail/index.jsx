import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MekanData from "./../../Data/MekanData";
import style from './index.module.scss';
import Info from './Info';
import MekanCardWithTitle from '../../components/common components/MekanCardWithTitle';

function MekanSliderWithNav({ initialSlide }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialSlide);
  const slidesPerView = 3;
  const totalSlides = MekanData.length;
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/struktur/tabe_teskilatlar/${activeIndex + 1}`);
  }, [activeIndex, navigate]);

  return (
    <div className={style.container}>
      <Swiper
        className={style.content}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={0}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        initialSlide={initialSlide}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
          992: {
            spaceBetween: 0,
          },
        }}
      >
        {MekanData.map((item, i) => {
          const isCenterSlide =
            (i === (activeIndex + Math.floor(slidesPerView / 2)) % totalSlides);

          return (
            <SwiperSlide key={i} className={`${style.slide} ${isCenterSlide ? style.active : ''}`}>
              <MekanCardWithTitle title={item.title} image={item.image} />
            </SwiperSlide>
          )
        })}
      </Swiper>

      {/* Display Info component for only the active slide */}
      <Info item={MekanData[activeIndex !== 3 ? activeIndex + 1 : 0]} />

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
