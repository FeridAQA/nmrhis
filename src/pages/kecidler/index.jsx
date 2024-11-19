import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
function Kecidler() {
    return (
        <div id='kecidler'>
            <Helmet>
                <title>Keçidlər</title>
            </Helmet>
            <div className="container">
                <div className="title">
                    KEÇİDLƏR
                </div>
                <div className="up">
                    <div className="text">
                        Dövlət Qurumları
                    </div>
                    <div className="boxs">
                        <Link to='https://president.az/'>
                            <div className="box">
                                <div className="imgbox">
                                    <img src="https://old.nmrhis.az/his/assets/img/prez.jpg" alt="" />
                                </div>
                            </div>
                        </Link>
                        <Link to='https://nnk.gov.az/'>
                            <div className="box">
                                <div className="imgbox">
                                    <img src="https://old.nmrhis.az/his/assets/img/nnk.jpg" alt="" />
                                </div>
                            </div>
                        </Link>
                        <Link to='http://www.alimeclis.az/'>
                            <div className="box">
                                <div className="imgbox">
                                    <img src="https://old.nmrhis.az/his/assets/img/alimeclis.jpg" alt="" />
                                </div>
                            </div>
                        </Link>
                        <Link to='https://heydar-aliyev-foundation.org/az'>
                            <div className="box">
                                <div className="imgbox">
                                    <img src="https://old.nmrhis.az/his/assets/img/hef.jpg" alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="down">
                    <div className="text">
                        HİŞ-in tabeliyində olan təşkilatlar
                    </div>
                    <div className="boxs">
                        <Link to='https://az.wikipedia.org/wiki/Dar%C4%B1da%C4%9F_mineral_bula%C4%9F%C4%B1'>
                            <div className="box">
                                <div className="imgbox">
                                    <img src="https://old.nmrhis.az/his/assets/img/duz.png" alt="" />
                                </div>
                            </div>
                        </Link>
                        <Link to='https://agbulaq.com/az/'>
                            <div className="box">
                                <div className="imgbox">
                                    <img src="https://old.nmrhis.az/his/assets/img/agb.jpg" alt="" />
                                </div>
                            </div>
                        </Link>
                        <Link to='https://duzdag.com/az/'>
                            <div className="box">
                                <div className="imgbox">
                                    <img src="https://old.nmrhis.az/his/assets/img/duzd.png" alt="" />
                                </div>
                            </div>
                        </Link>
                      
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Kecidler