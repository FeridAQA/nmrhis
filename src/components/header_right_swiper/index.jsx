import React, { useRef } from 'react';
import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import corner from '../../assets/img/header/corner.png';
import { Link } from 'react-router-dom';

import image1 from '../../assets/img/header_img/image.png';

SwiperCore.use([Pagination, Autoplay]);

const NewsSwiper = () => {
    const swiperRef = useRef(null);

    const newsData = [
        {
            id: 1,
            title: 'Naxçıvanda Milli Mətbuat Günü münasibətilə tədbir keçirilib.',
            image: image1,
        },
        {
            id: 2,
            title: 'Başqa bir xəbər başlığı.',
            image: image1,
        },
        {
            id: 3,
            title: 'Daha bir xəbər başlığı.',
            image: image1,
        },
    ];

    return (
        <div className="news-swiper">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ type: 'fraction' }}
                spaceBetween={0} // Boşluq olmadan bitişik slaydlar
                slidesPerView={1}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                autoplay={{
                    delay: 2000, // 2 saniyədən bir dəyişsin
                    disableOnInteraction: false,
                }}
                speed={500} // Keçid sürətini sürətləndirir
            >
                {newsData.map((news) => (
                    <SwiperSlide key={news.id}>
                        <div className="news-slide">
                            <div className="imgbox">
                                <img src={news.image} alt={news.title} className="news-image" />
                            </div>
                            <div className="news-content">
                                <h3>{news.title}</h3>
                            </div>
                            <div className="number">
                                {news.id} / {newsData.length}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="corner">
                <img src={corner} alt="" />
            </div>
            <Link to="xeberler">
                <div className="ox">
                    <ArrowOutwardIcon className="oxx" />
                </div>
            </Link>
            <div className="xeberler">
                Xəbərlər
            </div>
            <div className="custom-navigation">
                <div
                    className="custom-prev"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    &lt;
                </div>
                <div
                    className="custom-next"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    &gt;
                </div>
            </div>
        </div>
    );
};

export default NewsSwiper;
