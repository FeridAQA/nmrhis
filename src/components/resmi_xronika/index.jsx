import React from 'react'
import './index.scss'

import gerb from '../../assets/img/image.png'

import ipone from '../../assets/img/remi_xronika/telefon.png'
import foto from '../../assets/img/remi_xronika/image.png'


function Resmi_xronika() {
    return (
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
                    <div className="imgbox">
                        <div className="ipone">
                            <img src={ipone} alt="" />
                        </div>
                        <div className="img">
                            <img src={foto} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resmi_xronika