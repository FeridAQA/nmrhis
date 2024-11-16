import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './index.module.scss';
import FotoXronikaCard from '../../../components/common components/FotoXronikaCard';
import axios from 'axios';
import { baseURL } from '../../../confiq';

function FotoXronikaSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesPerView = 4;
  const totalSlides = 8;

  const [Data, setData] = useState([])

  async function GetData() {
    try {
      const response = await (await axios.get(baseURL.concat("photos?page=2"))).data.images
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
      <div className={style.titleBox}>
        <h2 className={style.title}>Foto Xronika</h2>
      </div>

      <Swiper
        className={style.content}
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={slidesPerView}
        spaceBetween={0}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          prevEl: "#prevBtnFoto",
          nextEl: "#nextBtnFoto",
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 0
          }
        }}
      >
        {Data && Data.map((item, i) => {
          const isCenterSlide =
            (i === (activeIndex + Math.floor(1)) % totalSlides);

          return (
            <SwiperSlide
              key={i}
              className={`${style.slide} ${isCenterSlide ? style.active : ''}`}
            >
              <FotoXronikaCard
                image={item.name}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={style.prevBtn} id="prevBtnFoto">
        <ArrowBackIcon className={style.arrow} />
      </div>
      <div className={style.nextBtn} id="nextBtnFoto">
        <ArrowForwardIcon className={style.arrow} />
      </div>
    </div>
  );
}

export default FotoXronikaSlider;
