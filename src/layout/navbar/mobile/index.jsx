import React, { useState } from 'react'
import style from "./index.module.scss";
import NavLogo from "./../../../assets/NavLogo.png";
import Dropdown from '../../../components/navbar components/dropdown';
import { Link } from 'react-router-dom';

function MobileNavbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={style.container}>
      <div className={style.logo}>
        <img src={NavLogo} alt='Logo' />
      </div>
      <p className={style.title}>Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurası</p>
      <i onClick={() => setIsOpen(true)} className={`fa-solid fa-bars ${style.toggleBar}`}></i>
      <div className={`${style.dropdownMenu} ${isOpen ? "" : style.hide}`}>
        <Dropdown title={"HIŞ"}>
          <Link to={"rehberlik"}>Rəhbərlik</Link>
          <Link to={"struktur"}>Stuktur</Link>
          <Link to={"orqanlar"}>Orqanlar</Link>
          <Link to={"haqqimizda"}>Haqqımızda</Link>
          <Link to={"qanunvericilik"}>Qanunvericilik</Link>
        </Dropdown>
        <Dropdown title={"İCTİMAİYYƏTLƏ ƏLAQƏLƏR "}>
          <Link to={"xeberler"}>Xəbərlər</Link>
          <Link to={"bize_yazirlar"}>Bizə Yazırlar</Link>
          <Link to={"foto_xronika"}>Foto Xronika</Link>
        </Dropdown>
        <Link className={style.link} to={"sosial_tereftasliq"}>SOSİAL TƏRƏFDAŞLIQ</Link>
        <Dropdown title={"FƏALİYYƏTİMİZ"}>
          <Link to={"gencler_siyaseti"}>Gənclər Siyasəti</Link>
          <Link to={"emek_huquqlari"}>Əmək Hüquqları</Link>
          <Link to={"emeyin_tehlukesizliyi"}>Əməyin Təhlükəsizliyi</Link>
          <Link to={"sosial_teminatlar"}>Sosial Təminatlar</Link>
        </Dropdown>
        <Link className={style.link} to={"elaqe"}>ƏLAQƏ</Link>
      </div>
      <div className={`${style.overlay} ${isOpen ? "" : style.hide}`} onClick={() => setIsOpen(false)}></div>
    </nav>
  )
}

export default MobileNavbar
