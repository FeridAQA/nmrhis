import React from 'react'
import gerb from '../../assets/img/image.png'

import './index.scss'
import { Link } from 'react-router-dom'
function Struk_uc() {
    return (
        <div id='Struk_uc'>
            <div className="img">
                <img src={gerb} alt="gerb" />
            </div>
            <div className="container">
                <div className="box ">
                    <Link className='l C' to='uzv_teskilatlar'>
                        <div className="icon">
                            <svg className="custom-svg" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M110 110H10" className="line" strokeWidth="3" strokeLinecap="round" />
                                <path d="M105 110V30C105 20.5719 105 15.8579 102.071 12.9289C99.1419 10 94.4278 10 84.9998 10H74.9998C65.5717 10 60.8576 10 57.9287 12.9289C55.571 15.2866 55.1112 18.8011 55.0215 25" className="line" strokeWidth="3" />
                                <path d="M75 110V45C75 35.5719 75 30.8579 72.0711 27.9289C69.1421 25 64.4281 25 55 25H35C25.5719 25 20.8579 25 17.9289 27.9289C15 30.8579 15 35.5719 15 45V110" className="line" strokeWidth="3" />
                                <path d="M45 110V95" className="line" strokeWidth="3" strokeLinecap="round" />
                                <path d="M30 40H60" className="line" strokeWidth="3" strokeLinecap="round" />
                                <path d="M30 55H60" className="line" strokeWidth="3" strokeLinecap="round" />
                                <path d="M30 70H60" className="line" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="text">ÜZV TƏŞKİLATLAR</div>
                    </Link>
                </div>

                <div className="box ">
                    <Link className='l C' to='tabe_teskilatlar/1'>
                        <div className="icon">
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='line' d="M62.5 25C71.9281 25 76.6421 25 79.5711 27.9289C82.5 30.8579 82.5 35.5719 82.5 45V75C82.5 84.4281 82.5 89.1421 79.5711 92.0711C76.6421 95 71.9281 95 62.5 95H57.5C48.0719 95 43.3579 95 40.4289 92.0711C37.5 89.1421 37.5 84.4281 37.5 75L37.5 45C37.5 35.5719 37.5 30.8579 40.4289 27.9289C43.3579 25 48.0719 25 57.5 25L62.5 25Z" stroke="#2393BB" strokeWidth="3" />
                                <path className='line' d="M110 95H107.5C100.596 95 95 89.4036 95 82.5L95 37.5C95 30.5964 100.596 25 107.5 25L110 25" stroke="#2393BB" strokeWidth="3" strokeLinecap="round" />
                                <path className='line' d="M10 95H12.5C19.4036 95 25 89.4036 25 82.5L25 37.5C25 30.5964 19.4036 25 12.5 25L10 25" stroke="#2393BB" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="text">TABE TƏŞKİLATLAR
                        </div>
                    </Link>
                </div>
                <div className="box C">
                    <Link className='l C' to='his_sobeleri'>
                        <div className="icon">
                            <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* <rect x="0.5" width="120" height="120" rx="3" fill="white" /> */}
                                <path className='line' d="M110.5 110H10.5" stroke="#2393BB" strokeWidth="3" strokeLinecap="round" />
                                <path className='line' d="M85.5 110V30C85.5 20.5719 85.5 15.8579 82.5711 12.9289C79.6421 10 74.9281 10 65.5 10H55.5C46.0719 10 41.3579 10 38.4289 12.9289C35.5 15.8579 35.5 20.5719 35.5 30V110" stroke="#2393BB" strokeWidth="3" />
                                <path className='line' d="M105.5 110V57.5C105.5 50.4777 105.5 46.9665 103.815 44.4443C103.085 43.3524 102.148 42.4149 101.056 41.6853C98.5335 40 95.0223 40 88 40" stroke="#2393BB" strokeWidth="3" />
                                <path className='line' d="M15.5 110V57.5C15.5 50.4777 15.5 46.9665 17.1853 44.4443C17.9149 43.3524 18.8524 42.4149 19.9443 41.6853C22.4665 40 25.9777 40 33 40" stroke="#2393BB" strokeWidth="3" />
                                <path className='line' d="M60.5 110V95" stroke="#2393BB" strokeWidth="3" strokeLinecap="round" />
                                <path className='line' d="M50.5 25H70.5" stroke="#2393BB" strokeWidth="3" strokeLinecap="round" />
                                <path className='line' d="M50.5 40H70.5" stroke="#2393BB" strokeWidth="3" strokeLinecap="round" />
                                <path className='line' d="M50.5 55H70.5" stroke="#2393BB" strokeWidth="3" strokeLinecap="round" />
                                <path className='line' d="M50.5 70H70.5" stroke="#2393BB" strokeWidth="3" strokeLinecap="round" />
                            </svg>

                        </div>
                        <div className="text x ">HİŞ ŞÖBƏLƏRİ VƏ BÖLMƏLƏRİ
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Struk_uc