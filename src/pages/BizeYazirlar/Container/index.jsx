import React, { useRef, useState, useEffect } from 'react'
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
import axios from 'axios';
import { baseURL } from './../../../confiq';

function BizeYazirlarContainer() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [Data, setData] = useState([])

  async function GetData() {
    try {
      const response = await (await axios.get(baseURL.concat("bize-yazirlar?page=1"))).data
      console.log(response);
      setData(response)

    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    GetData()
  }, [])

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
        loop={Data && Data.length > 1}
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
        {Data && Data.map((item, i) => {
          const isFirstSlide = (i === activeIndex);

          return (
            <SwiperSlide key={i} className={`${style.slide} ${isFirstSlide ? style.firstSlide : ''}`}>
              <YaziCard {...item} truncate={true} desktopDate={false} isFirstSlide={isFirstSlide} />
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
