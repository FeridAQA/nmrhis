import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./index.module.scss"

function Links() {
  return (
    <ul className={style.navbar_links}>
      <li><NavLink className={`${style.NavLink} ${style.Active}`} to={"/"}>ANA SƏHİFƏ</NavLink></li>
      <li><NavLink className={`${style.NavLink} ${style.Dropdown}`}>HIŞ <i className={`fa-solid fa-angle-right ${style.icon}`}></i></NavLink>
        <ul className={style.dropdownMenu}>
          <li><NavLink className={style.subLink} to={"/rehberlik/sedr"}>Rəhbərlik</NavLink></li>
          <li><NavLink className={style.subLink} to={"/struktur"}>Struktur</NavLink></li>
          <li><NavLink className={style.subLink} to={"/orqanlar"}>Orqanlar</NavLink></li>
          <li><NavLink className={style.subLink} to={"/haqqimizda"}>Haqqımızda</NavLink></li>
          <li><NavLink className={style.subLink} to={"/qanunvericilik"}>Qanunvericilik</NavLink></li>
        </ul>
      </li>
      <li><NavLink className={`${style.NavLink} ${style.Dropdown}`}>İCTİMAİYYƏTLƏ ƏLAQƏLƏR <i className={`fa-solid fa-angle-right ${style.icon}`}></i></NavLink>
        <ul className={style.dropdownMenu}>
          <li><NavLink className={style.subLink} to={"/xeberler"}>Xəbərlər</NavLink></li>
          <li><NavLink className={style.subLink} to={"/bize_yazirlar"}>Bizə Yazırlar</NavLink></li>
          <li><NavLink className={style.subLink} to={"/foto_xronika"}>Foto Xronika</NavLink></li>
        </ul>
      </li>
      <li><NavLink className={`${style.NavLink} ${style.Active}`} to={"/sosial_terefdasliq"}>SOSİAL TƏRƏFDAŞLIQ</NavLink></li>
      <li><NavLink className={`${style.NavLink} ${style.Dropdown}`}>FƏALİYYƏTİMİZ <i className={`fa-solid fa-angle-right ${style.icon}`}></i></NavLink>
        <ul className={style.dropdownMenu}>
          <li><NavLink className={style.subLink} to={"/gencler_siyaseti"}>Gənclər Siyayəti</NavLink></li>
          <li><NavLink className={style.subLink} to={"/emek_huquqlari"}>Əmək Hüquqları</NavLink></li>
          <li><NavLink className={style.subLink} to={"/emeyin_tehlukesizliyi"}>Əməyin Təhlükəsizliyi</NavLink></li>
          <li><NavLink className={style.subLink} to={"/sosial_telimatlar"}>Sosial Təlimatlar</NavLink></li>
        </ul>
      </li>
      <li><NavLink className={`${style.NavLink} ${style.Active}`} to={"/elaqe"}>ƏLAQƏ</NavLink></li>
    </ul>
  )
}

export default Links
