import React from 'react'
import './index.scss'
import gerb from '../../assets/img/image.png'


import MessageIcon from '@mui/icons-material/Message';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Web';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Elaqe() {
    return (
        <div id='elaqe'>
            <Helmet>
                <title>Əlaqə - HİŞ</title>
            </Helmet>
            <div className="img">
                <img src={gerb} alt="gerb" />
            </div>
            <div className="container">
                <div className="title">
                    <h2>ƏLAQƏ</h2>
                </div>
                <div className="line"></div>
                <div className="box">
                    <div className="map1">
                        <div style={{ width: '100%', height: '450px', border: 'none' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1545.6679482803768!2d45.4157195!3d39.2125364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4014320885c5765b%3A0x8c2b2759e00171f!2zTmF4w6fEsXZhbiBNdXh0YXIgUmVzcHVibGlrYXPEsSBIyZlta2FybGFyIMSwdHRpZmFxxLEgxZ51cmFzxLE!5e0!3m2!1saz!2saz!4v1731231748070!5m2!1saz!2saz"
                                width="100%"
                                height="100%"
                                style={{ border: '0' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                    <div className="map2">
                        <div style={{ width: '100%', height: '300px', border: 'none' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1545.6679482803768!2d45.4157195!3d39.2125364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4014320885c5765b%3A0x8c2b2759e00171f!2zTmF4w6fEsXZhbiBNdXh0YXIgUmVzcHVibGlrYXPEsSBIyZlta2FybGFyIMSwdHRpZmFxxLEgxZ51cmFzxLE!5e0!3m2!1saz!2saz!4v1731231748070!5m2!1saz!2saz"
                                width="100%"
                                height="100%"
                                style={{ border: '0' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                    <div className="text">
                        <div className="up">

                            <div className="a_div">
                                <a target='_blank' href="https://www.google.com/maps/place/Nax%C3%A7%C4%B1van+Muxtar+Respublikas%C4%B1+H%C9%99mkarlar+%C4%B0ttifaq%C4%B1+%C5%9Euras%C4%B1/@39.2125364,45.4157195,18.5z/data=!4m6!3m5!1s0x4014320885c5765b:0x8c2b2759e00171f!8m2!3d39.2125376!4d45.4161597!16s%2Fg%2F11b76d3xkt?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">
                                    <PlaceIcon />
                                    Naxçıvan şəhəri, Mustafa Kamal Atatürk 30
                                </a>
                            </div>
                            <div className="a_div">
                                <a href="mailto:naxcivanhis@gmail.com">
                                    <EmailIcon />
                                    naxcivanhis@gmail.com
                                </a>
                            </div>
                            <div className="a_div">
                                <a target='_balank' href="https://nmrhis.az/">
                                    <WebIcon />
                                    https://nmrhis.az
                                </a>
                            </div>
                            <div className="tel">
                                <LocalPhoneIcon />
                                <div className="tel_box">
                                    <a href="tel:+(994) 36-545-31-28">(036) 545-31-28</a>
                                    <a href="tel:+(994) 36-211 21 91">(060) 211 21 91</a>
                                    <a href="tel:+(994) 36-200 22 00">(060) 200 22 00</a>
                                </div>
                            </div>
                        </div>
                        <div className="down">
                            <div className="title">
                                MÜRACİƏT FORMASI
                            </div>
                            <Link to={'/form'}>
                                <div className="mesaj">
                                    <ForwardToInboxIcon className='icon'></ForwardToInboxIcon>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Elaqe