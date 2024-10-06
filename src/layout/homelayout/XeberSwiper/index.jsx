import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import style from "./index.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import XeberCard from '../../../components/home components/XeberCard';
import { Link } from 'react-router-dom';
import XeberlerSwiperMobile from './Mobile';

function XeberSwiper() {
  return (
    <>
      <div className={style.container}>
        <div className={style.titleBox}>
          <h2 className={style.title}>Xəbərlər</h2>
          <Link to={"/xeberler"} className={style.link}>Daha ətraflı məlumat</Link>
        </div>

        <Swiper
          className={style.content}
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          spaceBetween={60}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          navigation={{
            prevEl: "#prevBtn",
            nextEl: "#nextBtn",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
            <SwiperSlide key={i}>
              <XeberCard
                description={"22 iyul 2024 16:07"}
                title={"“Azərbaycan Silahlı Qüvvələrinin qüdrəti ilbəil yüksəlir”"}
                image={"https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.prevBtn} id="prevBtn">
          <ArrowBackIcon className={style.arrow} />
        </div>
        <div className={style.nextBtn} id="nextBtn">
          <ArrowForwardIcon className={style.arrow} />
        </div>
      </div>
      <XeberlerSwiperMobile />
    </>
  )
}

export default XeberSwiper
