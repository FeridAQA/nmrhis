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
        loop={props.images && props.images.length > 1} // Only loop if there are multiple images
        pagination={{
          clickable: true,
        }}
      >
        {props.images && props.images.map((item, index) => (
          <SwiperSlide className={style.imgBox} key={item.id || `${index}-${item}`}>
            <img src={imageURL.concat(item)} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
