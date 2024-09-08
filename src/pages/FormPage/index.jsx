import React from 'react'
import './index.scss'
import gerb from '../../assets/img/image.png'

function FormPage() {
    return (
        <div id='Form_page'>
            <div className="rectangle">
            <div className="img"><img src={gerb} alt="" /></div>
                <div className="head C">
                    <h3>EMAİL FORMASI</h3>
                </div>
                <div className="form C">
                    <div className="left column">
                        <div className="box">
                            <label htmlFor="">Ad Soyad</label>
                            <div className="input_div ">
                                <i class="fa-regular fa-user"></i>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="">Əlaqə nömrə</label>
                            <div className="input_div ">
                                <i class="fa-solid fa-phone"></i>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="">Elektron poçt</label>
                            <div className="input_div ">
                                <i class="fa-regular fa-envelope"></i>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="">Doğum tarixi</label>
                            <div className="input_div ">
                                <i class="fa-solid fa-calendar-days"></i>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div className="right column">
                        <div className="box">
                            <label htmlFor="">Şəxsiyyət vəsiqəsinin seriyyası</label>
                            <div className="input_div ">
                                <i class="fa-regular fa-address-card"></i>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="">Ünvan</label>
                            <div className="input_div ">
                                <i class="fa-solid fa-location-dot"></i>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="">İş yeri</label>
                            <div className="input_div ">
                                <i class="fa-solid fa-file-lines"></i>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="">Müraciət</label>
                            <div id='muraciyet' className="input_div ">
                                <textarea type="" placeholder="Müraciət" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPage