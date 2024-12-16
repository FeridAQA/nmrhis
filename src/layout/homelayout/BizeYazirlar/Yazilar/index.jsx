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
import { useNavigate } from 'react-router-dom';

function Yazilar() {

  const navigate = useNavigate()

  const [Data, setData] = useState([])

  async function GetData() {
    try {
      const response = await (await axios.get(baseURL.concat("bize-yazirlar?page=1"))).data
      // console.log(response);
      setData(response)

    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    GetData()
  }, [])

  function handleClick(id) {
    navigate(`/bize_yazirlar/${id}`)
  }

  return (
    <div className={style.container}>
      <Swiper
        className={style.content}
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={32}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={Data && Data.length > 1}
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
            <SwiperSlide
              key={i}
              className={`${style.slide}`}
              onClick={() => handleClick(item.id)}
            >
              <YaziCard {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Yazilar
