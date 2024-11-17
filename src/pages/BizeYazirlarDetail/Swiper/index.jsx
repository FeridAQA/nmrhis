import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import YaziCard from '../../BizeYazirlar/YaziCard';
import style from "./index.module.scss";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { baseURL } from '../../../confiq';

function BizeYazirlarSwiper() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
        modules={[Autoplay, Navigation]}
        slidesPerView={3}
        spaceBetween={32}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={Data && Data.length > 1}
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
        {Data && Data.map((item, i) => {
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
