import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import { Helmet } from 'react-helmet-async'

function Konfrans() {
    return (
        <div id='konfrans'>
            <Helmet>
                <title>Konfrans</title>
            </Helmet>
            <div className="container">
                <div id="SubNavbar_iki">
                    <div className="tab-menu">
                        <NavLink to="/orqanlar/konfrans" className="tab-item">Konfrans</NavLink>
                        <NavLink to="/struktur/tabe_teskilatlar/1" className="tab-item ">Tabe Təşkilatlar</NavLink>
                        <NavLink to="/struktur/his_sobeleri" className="tab-item">HİŞ Şöbələri və Bölmələri</NavLink>
                    </div>
                </div>
                <div className="down">

                    <div className="title">
                        Şuranın orqanları
                    </div>
                    <div className="text">
                        Şuranın ali orqanı konfransdır və məclis tərəfindən beş ildə bir dəfədən (az olmayaraq) gec olmayaraq çağrılır. Konfransa nümayəndəlik normalarını Şuranın məclisi nümayəndələrin seçilmə qaydası üzv təşkilatlar tərəfindən müəyyənləşdirilir. Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının sədri məsul şəxslər təşkilatlardan konfransa nümayəndə seçilirlər.
                    </div>
                    <div className="title">
                        Konfrans
                    </div>
                    <div className="text">
                        Naxçıvan Muxtar Respublika Həmkarlar İttifaqları Şurası və təftiş komissiyasının fəaliyyəti barədə hesabatı dinləyir.
                        Konkret dövr üçün Şuranın strategiyası və fəaliyyətinin əsas istiqamətlərini müəyyənləşdirir. Şuranın nizamnaməsini, təftiş komissiyasının hesabatını təsdiq edir.
                        Üzv təşkilatlar tərəfindən birbaşa nümayəndəlik prinsipi üzrə və ya seçilmiş konfrans tərəfindən məclis üzvlərinin səlahiyyətlərini təsdiq edir.
                        Konfrans nümayəndələri arasında Şuranın sədrini seçir və təftiş komissiyasının üzvlərini təsdiq edir. Təftiş komissiyasının üzvləri komissiyanın sədrini seçir.
                        Konfrans üzv təşkilatlardan bərabər sayda seçilmiş nümayəndələrin ən azı üçdə ikisi hissəsi iştirak etdiyi halda səlahiyyətli hesab olunur, konfransın qərarları sadə səs çoxluğu ilə qəbul edilir.
                        Konfransın iş qaydası onun nümayəndələri tərəfindən müəyyənləşdirilir.
                        Şuranın növbədənkənar konfransları məclis tərəfindən və ya üzv təşkilatların azı üçdə bir hissəsinin tələbi ilə çağırılır. Konfransın çağırılması haqqında qərar və onun gündəliyi 20 gün qalmış elan edilir.
                        Məclisin və təftiş komissiyasının tərkibinə seçilməmiş nümayəndələr konfransın işində məşvərətçi səslə iştirak edirlər.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Konfrans