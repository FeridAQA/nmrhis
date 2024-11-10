import React from 'react'

import './index.scss'

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import i1 from '../../assets/img/ana_s_feliyet/i1.png'
import i2 from '../../assets/img/ana_s_feliyet/i2.png'
import i3 from '../../assets/img/ana_s_feliyet/i3.png'
import corner from '../../assets/img/header/corner.png'
import { Link } from 'react-router-dom'

function Ana_s_fealiyet() {
    return (
        <div id='ana_s_fealiyet'>
            <div className="container">
                <div className="h2">
                    Fəaliyyətlərimiz
                </div>
                <div className="bigbox">
                    <div className="box">
                        <div className="corner">
                            <img src={corner} alt="" />
                        </div>
                        <Link to='emeyin_tehlukesizliyi'>
                            <div className="ox">
                                <ArrowOutwardIcon className='oxx' />
                            </div>
                        </Link>
                        <div className="imgbox">
                            <img src={i1} alt="" />
                        </div>
                        <div className="text">
                            Əməyin Təhlükəsizliyi
                        </div>
                    </div>
                    <div className="box">
                        <div className="corner">
                            <img src={corner} alt="" />
                        </div>
                        <Link to='sosial_terefdasliq'>
                            <div className="ox">
                                <ArrowOutwardIcon className='oxx' />
                            </div>
                        </Link>
                        <div className="imgbox">
                            <img src={i2} alt="" />
                        </div>
                        <div className="text">
                            Sosial Tərəfdaşlıq
                        </div>
                    </div>
                    <div className="box">
                        <div className="corner">
                            <img src={corner} alt="" />
                        </div>
                        <Link to='gencler_siyaseti'>
                            <div className="ox">
                                <ArrowOutwardIcon className='oxx' />
                            </div>
                        </Link>
                        <div className="imgbox">
                            <img src={i3} alt="" />
                        </div>
                        <div className="text">
                            Gənclər Siyasəti
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ana_s_fealiyet