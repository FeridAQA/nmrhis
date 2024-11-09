import React from 'react'
import './index.scss'

import gerb from '../../assets/img/image.png'

import foto from '../../assets/img/remi_xronika/image.png'
import Iphone12 from '../common components/Iphone12'

import InstagramIcon from '@mui/icons-material/Instagram';

import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom'

function Resmi_xronika() {
    return (
        <>
            <div id='resmi_xronika'>
                <div className="gerb">
                    <img src={gerb} alt="" />
                </div>
                <div className="container">
                    <div className="title">
                        <div className="text">
                            Rəsmi xronika
                        </div>
                        <div className="text">
                            Bizi izlə
                        </div>

                    </div>
                    <div className="down">

                        <div className="left">
                            <Iphone12 image={foto}></Iphone12>
                        </div>
                        <div className="right">
                            <div className="box1">
                                <div className="border">
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <div className="logo">
                                            <InstagramIcon className='icon'></InstagramIcon>
                                        </div>
                                    </a>
                                    <div className="text">
                                        10B
                                        İzləyici
                                    </div>
                                </div>
                            </div>
                            <div className="box2">
                                <div className="border">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <div className="logo">
                                            <FacebookIcon className='icon'></FacebookIcon>
                                        </div>
                                    </a>
                                    <div className="text">
                                        787
                                        İzləyici
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='resmi_xron_mobil'>
            <div className="gerb">
                    <img src={gerb} alt="" />
                </div>
                <div className="container">

                    <div className="text">
                        Rəsmi xronika
                    </div>
                    <div className="left">
                        <Iphone12 image={foto}></Iphone12>
                    </div>
                    <div className="text">
                        Bizi izlə
                    </div>
                    <div className="right">
                        <div className="box1">
                            <div className="border">
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="logo">
                                        <InstagramIcon className='icon'></InstagramIcon>
                                    </div>
                                </a>
                                <div className="text">
                                    10B
                                    İzləyici
                                </div>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="border">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="logo">
                                        <FacebookIcon className='icon'></FacebookIcon>
                                    </div>
                                </a>
                                <div className="text">
                                    787
                                    İzləyici
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Resmi_xronika