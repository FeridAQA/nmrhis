import React from 'react'
import gerb from '../../../assets/img/image.png' 
import '../rəhbərlik-Sədr/index.scss'

import i4 from '../../../assets/img/rehberlik/i4.png'

function Katib() {
  return (
    <div id='sedr'>
      <div className="container">
        <div className="gerb ">
          <img src={gerb} alt="" />
        </div>
        <div className="left_imges">
          <div className="img_div">
            <img src={i4} alt="" />
            <div className="adi C">
              XUDAVERDİYEV RƏŞADƏT CABBAR OĞLU
            </div>
          </div>
          <div className="text T">
            Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasında Katib          </div>
        </div>
        <div className="right">
          <div className="heyat">
            <h3>Həyatı</h3>
            <ul>
              <li>1961-ci il Kəngərli Rayon Qıvraq kəndində anadan olub.</li>
              <li>2008-ci ildə Moskva Beynəlxalq Əmək və Sosial Münasibətlər İnstutunun Bakı filialını bitirib.</li>
              <li>Ailəlidir, 2 övladı var.</li>
            </ul>
          </div>
          <div className="emek_fealiyyeti">
            <h3>Əmək fəaliyyəti</h3>
            <ul>
              <li>1982-ci ildə Bakı şəhərində zavodda fəhlə kimi əmək faliyyətinə başlayıb.</li>
              <li>1984-cü ildə Cernigov vilayətində Yüngül sənaye fabrikində usta köməkçisi vəzifəsində çalışıb.</li>
              <li>1987-ci ildə Naxçıvan şəhər Xalçaçılıq kombinatında sex müdiri işləyib.</li>
              <li>1999-cu ildə Naxçıvan MR Həmkarlar İttifaqı Şurasında əmək müfəttişi kimi fəaliyyətə başlayıb.</li>
              <li>2010-cu ildə Naxçıvan MR Həmkarlar İttifaqı Şurasında Rabitə İşçiləri üzrə təlimatçı kimi calışıb.</li>
              <li>2023-cü ildən Əməyin mühafizəsi şöbəsinin muüdiri kimi fəaliyyət göstərir.</li>
              <li>2008-ci ildə Əməkdar Mədəniyyət işçisi mükafı ilə təltif olunub.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Katib