import React, { useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SonXeberCard from '../../../components/common components/SonXeberCard';
import style from "./index.module.scss";

function SonXeberler() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesPerView = 3;
  const totalSlides = 8; // Number of slides

  return (
    <div className={style.container}>
      <h1 className={style.sectionTitle}>Son Xəbərlər</h1>
      <Swiper
        className={style.content}
        modules={[Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={60}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
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
        {Array.from({ length: totalSlides }, (_, i) => {
          return (
            <SwiperSlide
              key={i}
            >
              <SonXeberCard
                date={"23 iyun 2017"}
                title={'“Azərbaycan Silahlı Qüvvələrinin qüdrəti ilbəil yüksəlir”'}
                image={
                  'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg'
                }
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SonXeberler
