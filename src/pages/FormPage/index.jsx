import React, { useState } from 'react';
import './index.scss';
import axios from 'axios';
import gerb from '../../assets/img/image.png';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

function FormPage() {
    const [formData, setFormData] = useState({
        seriyavenomre: '',
        adsoyad: '',
        dogumtarixi: '',
        isyeri: '',
        unvan: '',
        elaqe: '',
        email: '',
        muracietmetini: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    // Input dəyişikliklərini izləmək üçün funksiya
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Toastify ilə bildiriş funksiyası
    const notifySuccess = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);

    // Formu göndərmək üçün funksiya
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await axios.post('https://api.nmrhis.az/contact', formData);
            notifySuccess('Müraciət uğurla göndərildi!');
            setFormData({
                seriyavenomre: '',
                adsoyad: '',
                dogumtarixi: '',
                isyeri: '',
                unvan: '',
                elaqe: '',
                email: '',
                muracietmetini: '',
            });
        } catch (error) {
            notifyError('Müraciət zamanı xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.');
            console.error('Error submitting the form:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="Form_page">
            <Helmet>
                <title>Müraciət</title>
            </Helmet>
            <div className="rectangle">
                <div className="img">
                    <img src={gerb} alt="" />
                </div>
                <div className="head C">
                    <h3>EMAİL FORMASI</h3>
                </div>
                <form className="form C" onSubmit={handleSubmit}>
                    <div className="left column">
                        <div className="box">
                            <label htmlFor="adsoyad">Ad Soyad</label>
                            <div className="input_div">
                                <i className="fa-regular fa-user"></i>
                                <input
                                    type="text"
                                    name="adsoyad"
                                    value={formData.adsoyad}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="elaqe">Əlaqə nömrə</label>
                            <div className="input_div">
                                <i className="fa-solid fa-phone"></i>
                                <input
                                    type="text"
                                    name="elaqe"
                                    value={formData.elaqe}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="email">Elektron poçt</label>
                            <div className="input_div">
                                <i className="fa-regular fa-envelope"></i>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="dogumtarixi">Doğum tarixi</label>
                            <div className="input_div">
                                <i className="fa-solid fa-calendar-days"></i>
                                <input
                                    type="date"
                                    name="dogumtarixi"
                                    value={formData.dogumtarixi}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right column">
                        <div className="box">
                            <label htmlFor="seriyavenomre">Şəxsiyyət vəsiqəsinin seriyyası</label>
                            <div className="input_div">
                                <i className="fa-regular fa-address-card"></i>
                                <input
                                    type="text"
                                    name="seriyavenomre"
                                    value={formData.seriyavenomre}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="unvan">Ünvan</label>
                            <div className="input_div">
                                <i className="fa-solid fa-location-dot"></i>
                                <input
                                    type="text"
                                    name="unvan"
                                    value={formData.unvan}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="isyeri">İş yeri</label>
                            <div className="input_div">
                                <i className="fa-solid fa-file-lines"></i>
                                <input
                                    type="text"
                                    name="isyeri"
                                    value={formData.isyeri}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="box">
                            <label htmlFor="muracietmetini">Müraciət</label>
                            <div id="muraciyet" className="input_div">
                                <textarea
                                    name="muracietmetini"
                                    value={formData.muracietmetini}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit" className="sendForm" disabled={isLoading}>
                                    <SendRoundedIcon className="iconn" style={{ fontSize: 40 }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default FormPage;
