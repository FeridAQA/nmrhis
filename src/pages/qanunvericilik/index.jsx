import React, { useState } from 'react';
import './index.scss';
import { Helmet } from 'react-helmet-async';
import PDFBlock from '../../layout/commonlayout/PDFBlock';

function Qanunvericilik() {
    const pdfLinks = [
        {
            link: 'https://old.nmrhis.az/his/assets/pdf/H%C9%99mkarlar-ittifaqlari-haqqinda-AZ%C6%8FRBAYCAN-RESPUBLIKASININ-QANUNU.pdf',
            title: 'Həmkarlar İttifaqı Haqqında Azərbaycan Respublikasının Qanunu'
        },
        {
            link: 'https://old.nmrhis.az/his/assets/pdf/AZ%C6%8FRBAYCAN-RESPUBLIKASININ-%C6%8FM%C6%8FK-M%C6%8FC%C6%8FLL%C6%8FSIND%C6%8FN-CIXARIS.pdf',
            title: 'Azərbaycan Respublikasının Əmək Məcəlləsindən Çıxarış'
        },
        {
            link: 'https://old.nmrhis.az/his/assets/pdf/AZ%C6%8FRBAYCAN-RESPUBLIKASININ-INZIBATI-X%C6%8FTALAR-M%C6%8FC%C6%8FLL%C6%8FSIND%C6%8FN-CIXARIS.pdf',
            title: 'Azərbaycan Respublikasının İnzibati Xətalar Məcəlləsindən Çıxarış'
        }
    ];

    // Aktiv PDF linki üçün state
    const [activePdf, setActivePdf] = useState(pdfLinks[0].link);

    return (
        <div id="qanun">
            <Helmet>
                <title>Qanunvericilik - HİŞ </title>
            </Helmet>
            <div className="container">
                <div className="bigbox">
                    {pdfLinks.map((item, index) => (
                        <div
                            key={index}
                            className={`box ${activePdf === item.link ? 'active' : ''}`}
                            onClick={() => setActivePdf(item.link)}
                        >
                            <div className="l">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="104" viewBox="0 0 84 104">
                                        <path
                                            d="M71.2489 78.0259C70.5318 78.4408 70.2868 79.3584 70.7016 80.0754C71.1164 80.7925 72.034 81.0376 72.7511 80.6228L71.2489 78.0259ZM11.2489 80.6228C11.966 81.0376 12.8836 80.7925 13.2984 80.0754C13.7132 79.3584 13.4682 78.4408 12.7511 78.0259L11.2489 80.6228ZM22 20.5C21.1716 20.5 20.5 21.1716 20.5 22C20.5 22.8284 21.1716 23.5 22 23.5V20.5ZM62 23.5C62.8284 23.5 63.5 22.8284 63.5 22C63.5 21.1716 62.8284 20.5 62 20.5V23.5ZM22 40.5C21.1716 40.5 20.5 41.1716 20.5 42C20.5 42.8284 21.1716 43.5 22 43.5V40.5ZM42 43.5C42.8284 43.5 43.5 42.8284 43.5 42C43.5 41.1716 42.8284 40.5 42 40.5V43.5ZM31 84.5V83H28V84.5H31ZM29.5 102H28C28 102.498 28.2469 102.963 28.6591 103.242C29.0712 103.521 29.5949 103.578 30.0571 103.393L29.5 102ZM42 97L42.5571 95.6073C42.1995 95.4642 41.8005 95.4642 41.4429 95.6073L42 97ZM54.5 102L53.9429 103.393C54.405 103.578 54.9288 103.521 55.3409 103.242C55.7531 102.963 56 102.498 56 102H54.5ZM56 84.5V83H53V84.5H56ZM80.5 22V62H83.5V22H80.5ZM3.5 62V22H0.5V62H3.5ZM22 3.5H62V0.5H22V3.5ZM3.5 22C3.5 11.7827 11.7827 3.5 22 3.5V0.5C10.1259 0.5 0.5 10.1259 0.5 22H3.5ZM83.5 22C83.5 10.1259 73.8741 0.5 62 0.5V3.5C72.2173 3.5 80.5 11.7827 80.5 22H83.5ZM80.5 62C80.5 68.8457 76.7825 74.8249 71.2489 78.0259L72.7511 80.6228C79.1735 76.9076 83.5 69.9599 83.5 62H80.5ZM0.5 62C0.5 69.9599 4.82646 76.9076 11.2489 80.6228L12.7511 78.0259C7.21751 74.8249 3.5 68.8457 3.5 62H0.5ZM55.5 72C55.5 79.4558 49.4558 85.5 42 85.5V88.5C51.1127 88.5 58.5 81.1127 58.5 72H55.5ZM42 85.5C34.5442 85.5 28.5 79.4558 28.5 72H25.5C25.5 81.1127 32.8873 88.5 42 88.5V85.5ZM28.5 72C28.5 64.5442 34.5442 58.5 42 58.5V55.5C32.8873 55.5 25.5 62.8873 25.5 72H28.5ZM42 58.5C49.4558 58.5 55.5 64.5442 55.5 72H58.5C58.5 62.8873 51.1127 55.5 42 55.5V58.5ZM22 23.5H62V20.5H22V23.5ZM22 43.5H42V40.5H22V43.5ZM28 84.5V102H31V84.5H28ZM30.0571 103.393L42.5571 98.3927L41.4429 95.6073L28.9429 100.607L30.0571 103.393ZM41.4429 98.3927L53.9429 103.393L55.0571 100.607L42.5571 95.6073L41.4429 98.3927ZM56 102V84.5H53V102H56Z"
                                        />
                                    </svg>

                                </div>
                                <div className="text">{item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pdf">
                    <PDFBlock src={activePdf} />
                </div>
            </div>
        </div>
    );
}

export default Qanunvericilik;
