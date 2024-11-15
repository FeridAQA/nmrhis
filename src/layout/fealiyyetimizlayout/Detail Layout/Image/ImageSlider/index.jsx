import React from 'react'
import style from "./index.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImageSlider(props) {
  return (
    <div className={style.container}>
      <Swiper
        className={style.content}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={64}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {props.images && props.images.map((item, i) => {

          return (
            <SwiperSlide className={style.imgBox} key={i}>
              <img src={item.image} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ImageSlider
