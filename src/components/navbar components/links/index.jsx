import React from 'react'
import style from "./index.module.scss"
import { NavLink } from 'react-router-dom'
import Dropdown from '../dropdown'

function Links() {
  return (
    <ul className={style.navbar_links}>
      <li><NavLink className={style.NavLink} to={"/"}>ANA SƏHİFƏ</NavLink></li>
      <li><NavLink className={style.NavLink} to={"/hish"}>HIŞ <i className={`fa-solid fa-angle-right ${style.icon}`}></i></NavLink></li>
      <li><NavLink className={style.NavLink} to={"/ictimayietleelaqeler"}>İCTİMAİYYƏTLƏ ƏLAQƏLƏR <i className={`fa-solid fa-angle-right ${style.icon}`}></i></NavLink></li>
      <li><NavLink className={style.NavLink} to={"/sosialtereftashliq"}>SOSİAL TƏRƏFDAŞLIQ</NavLink></li>
      <li><NavLink className={style.NavLink} to={"/fealiyyetimiz"}>FƏALİYYƏTİMİZ <i className={`fa-solid fa-angle-right ${style.icon}`}></i></NavLink></li>
      <li><NavLink className={style.NavLink} to={"/elaqe"}>ƏLAQƏ</NavLink></li>
    </ul>
  )
}

export default Links
