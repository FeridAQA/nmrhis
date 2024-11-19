import React, { useRef, useState, useEffect } from 'react';
import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import axios from 'axios';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import corner from '../../assets/img/header/corner.png';
import { Link } from 'react-router-dom';
import { baseURL } from '../../confiq';

SwiperCore.use([Pagination, Autoplay]);

const NewsSwiper = () => {
    const swiperRef = useRef(null);
    const [newsData, setNewsData] = useState([]);
    const [newsId, setNewsId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // API-dən verilənləri çəkmək
        const fetchNews = async () => {
            try {
                const response = await axios.get(`${baseURL}news?slider=1&count=5`);
                setNewsData(response.data); // API-dən gələn verilənləri state-ə yazırıq
                if (response.data.length > 0) {
                    setNewsId(response.data[0].id); // İlk xəbərin ID-sini təyin edirik
                }
            } catch (error) {
                console.error('Error fetching news data:', error);
            } finally {
                setLoading(false); // Yükləmə bitdi
            }
        };

        fetchNews();
    }, []);

    // Slayder dəyişdikdə ID-ni yenilə
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.realIndex; // Mövcud slaydın indeksi
        setNewsId(newsData[currentIndex]?.id); // Mövcud slaydın ID-sini state-ə yaz
    };

    if (loading) {
        return <div>Yüklənir...</div>; // Yükləmə ekranı
    }

    return (
        <div className="news-swiper">
            <Swiper
                className="borde_radius"
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
                onSlideChange={handleSlideChange} // Slayder dəyişiklik hadisəsini izləyir
            >
                {newsData.map((news, index) => (
                    <SwiperSlide className="trrrrr" key={news.id || index}>
                        <Link to={`/xeber/${news.id}`}>
                            <div className="news-slide">
                                <div className="imgbox">
                                    <img src={`https://api.nmrhis.az/uploads/${news.baslik_foto_url}`} alt={news.baslik} className="news-image" />
                                </div>
                                <div className="news-content">
                                    <h3>{news.baslik}</h3>
                                </div>
                                <div className="number">
                                    {index + 1} / {newsData.length}
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="corner">
                <img src={corner} alt="" />
            </div>
            <Link to={`/xeber/${newsId}`}>
                <div className="ox">
                    <ArrowOutwardIcon className="oxx" />
                </div>
            </Link>

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
