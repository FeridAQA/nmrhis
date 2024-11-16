import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "./index.module.scss";
import YaziCard from '../YaziCard';
import axios from 'axios';
import { baseURL } from "./../../../../confiq"

function Yazilar() {

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
        {Data && Data.map((item, i) => {
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
