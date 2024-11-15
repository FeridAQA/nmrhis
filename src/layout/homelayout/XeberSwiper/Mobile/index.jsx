import React, { useState, useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import style from "./index.module.scss";


function XeberlerSwiperMobile() {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // API-dən verilənləri çəkmək
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://api.nmrhis.az/news?slider=1&count=5');
                setNewsData(response.data); // API-dən gələn verilənləri state-ə yazırıq
            } catch (error) {
                console.error('Error fetching news data:', error);
            } finally {
                setLoading(false); // Yükləmə bitdi
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div>Yüklənir...</div>; // Yükləmə ekranı
    }

    return (
        <div className={style.box}>
            <Swiper
                className={style.container}
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={41}
                autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    300: {
                        spaceBetween: 21,
                    },
                    400: {
                        spaceBetween: 41
                    }
                }}
            >
                {/* API-dən gələn verilənləri göstərmək */}
                {newsData.map((news, i) => (
                    <SwiperSlide key={news.id || i}>
                        {/* Yuxarı Məzmun: Şəkil */}
                        <div className={style.imgBox}>
                            <img src={`https://api.nmrhis.az/uploads/${news.baslik_foto_url}`} alt={news.baslik} />
                            <p className={style.xeberler}>Xəbərlər</p>
                        </div>

                        {/* Aşağı Məzmun: Mətn */}
                        <div className={style.content}>
                            <p className={style.title}>
                                {news.baslik}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default XeberlerSwiperMobile;
