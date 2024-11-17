import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { baseURL } from '../../../confiq';

function XeberSwiper() {

  const [Data, setData] = useState([])

  async function GetData() {
    try {
      const response = await (await axios.get(baseURL.concat("news?count=8"))).data
      // console.log(response);
      setData(response)

    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    GetData()
  }, [])

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
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={Data && Data.length > 1}
          navigation={{
            prevEl: "#prevBtn",
            nextEl: "#nextBtn",
          }}
        >
          {Data && Data.map((item, i) => (
            <SwiperSlide key={i}>
              <XeberCard
                id={item.id}
                description={item.tarix}
                title={item.baslik}
                image={item.baslik_foto_url}
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
