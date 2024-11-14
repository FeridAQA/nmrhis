import React from 'react'
import './index.scss'
import gerb from '../../../assets/img/image.png'

import i1 from '../../../assets/img/rehberlik/i1.png'
function Sedr() {
  return (
    <div id='sedr'>
      <div className="container">
        <div className="gerb">
          <img src={gerb} alt="" />
        </div>
        <div className="left_imges">
          <div className="img_div">
            <img src={i1} alt="" />
            <div className="adi C">
              QƏZƏNFƏR İSMAYIL OĞLU ABDULLAYEV
            </div>
          </div>
          <div className="text T">
            Azərbaycan Həmkarlar İttifaqları Konfederasiyasının sədr müavini, Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının sədri
          </div>
        </div>
        <div className="right">
          <div className="heyat">
            <h3>Həyatı</h3>
            <ul>
              <li>26 may 1983-cü ildə Naxçıvan Muxtar Respublikası Culfa rayon Bənəniyar kəndində anadan olub.</li>
              <li>1989-1998-ci illərdə Culfa rayonu Bənəniyar kəndində orta təhsil alıb.</li>
              <li>2000 - ci ildə Naxçıvan şəhər N.Tusi adına 9 sayılı orta məktəbin X-XI sinfini bitirib.</li>
              <li>2001-2005 -ci illərdə Naxçıvan Dövlət Universitetinin Ümumi İqtisadiyyat fakültəsinin Mühasibat Uçotu və Audit ixtisasını fərqlənmə diplomu ilə bitirib.</li>
              <li>2005-2006-cı illərdə hərbi xidmətdə olub.</li>
              <li>2005-2006-cı illərdə hərbi xidmətdə olub.</li>
            </ul>
          </div>
          <div className="emek_fealiyyeti">
            <h3>Əmək fəaliyyəti</h3>
            <ul>
              <li>2000-ci ildə Naxçıvan Muxtar Respublikası Terminal- MMC-də gözətçi işləyib. </li>
              <li>2007-2010-cu ilədək Naxçıvan MR Dövlət Torpaq və Xəritəçəkmə Komitəsində Mühasib vəzifəsində çalışıb.</li>
              <li>2010-2023 - cü ilə qədər Naxçıvan MR Həmkarlar İttifaqları Şurasında Maliyyə-Təsərrüfat şöbəsinin müdiri vəzifəsində çalışıb.</li>
              <li>2023-cü il 1 mart-18 may tarixlərində Naxçıvan MR Həmkarlar İttifaqları Şurasında Katib, Maliyyə Təsərrüfat şöbəsinin müdiri vəzifəsində çalışıb.</li>
              <li>2023-cü il 18 may tarixli Naxçıvan MR Həmkarlar İttifaqları Şurasının ll Məclisinin Qərarı ilə Naxçıvan MR Həmkarlar İttifaqları Şurasının sədri vəzifəsinə seçilib.</li>
              <li>31 iyul 2023-cü ildə Naxçıvan Futbol Federasiyasının prezidenti seçilib.</li>
              <li>28 sentyabr 2023-cü ildə Azərbaycan Həmkarlar ittifaqları Konfederasiyasının sədr müavini seçilib.</li>
              <li>2021-ci ildə Həmkarlar ittifaqında xidmətlərinə görə medalı ilə təltif olunub.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sedr