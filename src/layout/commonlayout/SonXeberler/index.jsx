import React, { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SonXeberCard from '../../../components/common components/SonXeberCard';
import style from "./index.module.scss";
import axios from 'axios';
import { baseURL } from '../../../confiq';

function SonXeberler() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesPerView = 3;

  const [Data, setData] = useState([])

  async function GetData() {
    try {
      const response = await (await axios.get(baseURL.concat("news?page=1&count=5"))).data
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
    <div className={style.container}>
      <h1 className={style.sectionTitle}>Son Xəbərlər</h1>
      <Swiper
        className={style.content}
        modules={[Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={60}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={Data && Data.length > 1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          100: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 60,
          },
        }}
      >
        {Data && Data.map((item, i) => {
          return (
            <SwiperSlide
              key={i}
            >
              <SonXeberCard
                id={item.id}
                date={item.tarix}
                title={item.baslik}
                image={item.baslik_foto_url}
                path={"xeber"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SonXeberler
