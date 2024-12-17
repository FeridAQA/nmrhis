import React from 'react'
import './index.scss'


import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import img1 from '../../assets/img/header/image.png'
import img2 from '../../assets/img/header/img2.png'
import img3 from '../../assets/img/header/img3.png'
import corner from '../../assets/img/header/corner.png'
import { Link } from 'react-router-dom';
import NewsSwiper from '../header_right_swiper';

function Main_header() {
    return (
        <div id='header'>
            <div className="container">
                <div className="left">
                    <div className="up">
                        <div className="imgbox">
                            <img src={img1} alt="" />
                        </div>
                        <div className="title">
                            <Link to={'haqqimizda'}>
                            <h2>
                                Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurası
                            </h2>
                            </Link>
                        </div>
                        <div className="text">
                            Haqqımızda
                        </div>
                        <div className="corner">
                            <img src={corner} alt="" />
                        </div>
                        <Link to='haqqimizda'>
                            <div className="ox">
                                <ArrowOutwardIcon className='oxx' />
                            </div>
                        </Link>
                    </div>
                    <div className="down">
                        <div className="small_left">
                            <div className="imgbox">
                                <img src={img2} alt="" />
                            </div>
                            <div className="text">
                                Bizə yazırlar
                            </div>
                            <div className="corner">
                                <img src={corner} alt="" />
                            </div>
                            <Link to='bize_yazirlar'>
                                <div className="ox">
                                    <ArrowOutwardIcon className='oxx' />
                                </div>
                            </Link>
                        </div>
                        <div className="small_left">
                            <div className="imgbox">
                                <img src={img3} alt="" />
                            </div>
                            <div className="text">
                                Fəaliyyətlərimiz
                            </div>
                            <div className="corner">
                                <img src={corner} alt="" />
                            </div>
                            <Link to='gencler_siyaseti'>
                                <div className="ox">
                                    <ArrowOutwardIcon className='oxx' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <NewsSwiper></NewsSwiper>
                </div>
            </div>

        </div>
    )
}

export default Main_header