import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "./index.module.scss";
import { imageURL } from '../../../../confiq';

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
        loop={props.images && props.images.length > 1}
        pagination={{
          clickable: true,
        }}
      >
        {props.images && props.images.map((item, i) => {

          return (
            <SwiperSlide className={style.imgBox} key={i}>
              <img src={imageURL.concat(item)} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ImageSlider
