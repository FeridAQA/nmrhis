import React from 'react'
import gerb from '../../../assets/img/image.png'
import '../rəhbərlik-Sədr/index.scss'

import i2 from '../../../assets/img/rehberlik/i2.png'
import i3 from '../../../assets/img/rehberlik/i3.png'

function Muavinler() {
  return (
    <div id='sedr'>
      <div className="container">

        <div className="left_imges">
          <div className="img_div">
            <img src={i2} alt="" />
            <div className="adi C">
              CƏFƏROV RAMİZ ƏLİ OĞLU
            </div>
          </div>
          <div className="text T">
            Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının sədr müavini
          </div>
        </div>
        <div className="right">
          <div className="heyat">
            <h3>Həyatı</h3>
            <ul>
              <li>Cəfərov Ramiz Əli oğlu 19 may 1959-cu ildə Şərur rayonunun Qarabağlar kəndində anadan olub.</li>
              <li>1966–1976-cı illərdə Qarabağlar kənd orta məktəbində orta təhsil alıb.    </li>
              <li>1978–1980-cu illərdə sovet ordusu sıralarında həqiqi hərbi xidmətdə olub.</li>
              <li>Ali təhsilini Naxçıvan Dövlət Universitetində Hüquq və Beynəlxalq münasibətlər və İqtisadiyyat fakültələrində təhsil alıb.</li>
              <li>Ailəlidir, 4 övladı var.</li>
            </ul>
          </div>
          <div className="emek_fealiyyeti">
            <h3>Əmək fəaliyyəti</h3>
            <ul>
              <li>Müxtəlif idarə və təşkilatlarda çalışıb: Qarabağlar İstehlak Cəmiyyətinin sədri, Qıvraq İstehlak Cəmiyyətinin sədri, Şərur rayon "Kəngərli" Şəkər şirkətinin direktoru (1997–2002), 2 saylı Şərur Seçki Dairəsinin sədri (2003–2004), 24 may 2004-cü ildən 31 avqust 2015-ci ilədək Kəngərli rayon İcra Hakimiyyətinin başçısı kimi rəhbər vəzifələrdə çalışıb.</li>
              <li>Hazırda Naxçıvan MR Həmkarlar İttifaqları Şurasında sədr müavini işləyir.</li>
            </ul>
          </div>
          <div className="heyat">
            <h3>Nailiyyətləri</h3>
            <ul>
              <li>1993-cü ildən Yeni Azərbaycan Partiyasının II, III, IV və V Qurultaylarının nümayəndəsi, Yeni Azərbaycan Partiyası Naxçıvan MR Təşkilatı Siyasi Şurasının üzvü olub.</li>
              <li>2009-cu ildə Naxçıvan Muxtar Respublikası Ali Məclisinin Fəxri Fərmanı ilə təltif olunub.</li>
              <li>Həmkarlar ittifaqı hərəkatlarında xidmətlərinə görə "115 il" Yubiley döş nişanı ilə təltif olunub - 28.01.2021</li>
              <li>"AHİK-30 il" Yubiley döş nişanı ilə təltif olunub - 30.01.2023</li>
              <li>Azərbaycan Həmkarlar İttifaqları Konfederasiyasının Fəxri Fərmanı ilə təltif olunub - 15.10.2023</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h">
        <hr />
        <div className="gerb_kicik">
          <img src={gerb} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="left_imges">
          <div className="img_div">
            <img src={i3} alt="" />
            <div className="adi C">
              İBRAHİMLİ XATİRƏ MİKAYIL QIZI
            </div>
          </div>
          <div className="text T">
            Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının sədr müavini
          </div>
        </div>
        <div className="right">
          <div className="heyat">
            <h3>Həyatı</h3>
            <ul>
              <li>1974-cü ildə Naxçıvan şəhərində anadan olub.  </li>
              <li>1992-ci ildə Naxçıvan Dövlət Universitetinin kitabxanaşünaslıq və biblioqrafiya ixtisasına daxil olub.</li>
              <li>1998-ci ildə həmin universiteti bitirib.</li>
              <li>Ailəlidir, 2 övladı var.</li>
            </ul>
          </div>
          <div className="emek_fealiyyeti">
            <h3>Əmək fəaliyyəti</h3>
            <ul>
              <li>1991-ci ildən Rabitə sahəsində əmək fəaliyyətinə başlayıb, 2005-ci ilədək Naxçıvan şəhər Rabitə İdarəsində mühəndis vəzifəsində çalışıb.</li>
              <li>2005-ci ildən 2023-cü ilədək Naxçıvan MR Rabitə İşçiləri Birləşmiş Həmkarlar İttifaqı Komitəsinin sədri vəzifəsində çalışıb.</li>
              <li>2006-cı ildən bu günə qədər Naxçıvan MR Həmkarlar İttifaqları Şurasının sədr müavini kimi fəaliyyət göstərir.</li>
              <li>2008-ci ildə Azərbaycan Respublikasının Prezidenti İlham Əliyevin Sərəncamı ilə “Tərəqqi Medalı” ilə təltif olunub.</li>
            </ul>
          </div>

        </div>
      </div>
      <div className="responsiv">
        <div className="gerb_kicik">
          <img src={gerb} alt="" />
        </div>
      </div>
    </div>
  )
}


export default Muavinler