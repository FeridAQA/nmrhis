import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../../components/navbar components/dropdown';
import NavLogo from "./../../../assets/img/image.png";
import style from "./index.module.scss";

function MobileNavbar() {

  const [isOpen, setIsOpen] = useState(false)

  const HisLinks = [
    {
      title: "Rəhbərlik",
      to: "rehberlik/sedr"
    },
    {
      title: "Stuktur",
      to: "struktur"
    },
    {
      title: "Orqanlar",
      to: "orqanlar"
    },
    {
      title: "Haqqımızda",
      to: "haqqimizda"
    },
    {
      title: "Qanunvericilik",
      to: "qanunvericilik",
    }
  ]

  const ElaqeLinks = [
    {
      title: "Xəbərlər",
      to: "xeberler"
    },
    {
      title: "Bizə Yazırlar",
      to: "bize_yazirlar"
    },
    {
      title: "Foto Xronika",
      to: "foto_xronika"
    },
  ]

  const FealLinks = [
    {
      title: "Gənclər Siyasəti",
      to: "gencler_siyaseti"
    },
    {
      title: "Əmək Hüquqları",
      to: "emek_huquqlari"
    },
    {
      title: "Əməyin Təhlükəsizliyi",
      to: "emeyin_tehlukesizliyi"
    },
    {
      title: "Sosial Təlimatlar",
      to: "sosial_telimatlar"
    },
  ]

  return (
    <nav className={style.container}>
      <Link to={"/"} className={style.logo}>
        <img src={NavLogo} alt='Logo' />
      </Link>
      <p className={style.title}>Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurası</p>
      <i onClick={() => setIsOpen(!isOpen)} className={`fa-solid fa-bars ${style.toggleBar}`}></i>
      <div className={`${style.dropdownMenu} ${isOpen ? "" : style.hide}`}>
        <Dropdown title={"HIŞ"} data={HisLinks} setOpen={setIsOpen}>
          {/* <Link onClick={() => setIsOpen(false)} to={"rehberlik/sedr"}>Rəhbərlik</Link>
          <Link onClick={() => setIsOpen(false)} to={"struktur"}>Stuktur</Link>
          <Link onClick={() => setIsOpen(false)} to={"orqanlar"}>Orqanlar</Link>
          <Link onClick={() => setIsOpen(false)} to={"haqqimizda"}>Haqqımızda</Link>
          <Link onClick={() => setIsOpen(false)} to={"qanunvericilik"}>Qanunvericilik</Link> */}
        </Dropdown>
        <Dropdown title={"İCTİMAİYYƏTLƏ ƏLAQƏLƏR "} data={ElaqeLinks} setOpen={setIsOpen}>
          {/* <Link onClick={() => setIsOpen(false)} to={"xeberler"}>Xəbərlər</Link>
          <Link onClick={() => setIsOpen(false)} to={"bize_yazirlar"}>Bizə Yazırlar</Link>
          <Link onClick={() => setIsOpen(false)} to={"foto_xronika"}>Foto Xronika</Link> */}
        </Dropdown>
        <Link onClick={() => setIsOpen(false)} className={style.link} to={"sosial_terefdasliq"}>SOSİAL TƏRƏFDAŞLIQ</Link>
        <Dropdown title={"FƏALİYYƏTİMİZ"} data={FealLinks} setOpen={setIsOpen}>
          {/* <Link onClick={() => setIsOpen(false)} to={"gencler_siyaseti"}>Gənclər Siyasəti</Link>
          <Link onClick={() => setIsOpen(false)} to={"emek_huquqlari"}>Əmək Hüquqları</Link>
          <Link onClick={() => setIsOpen(false)} to={"emeyin_tehlukesizliyi"}>Əməyin Təhlükəsizliyi</Link>
          <Link onClick={() => setIsOpen(false)} to={"sosial_telimatlar"}>Sosial Təlimatlar</Link> */}
        </Dropdown>
        <Link onClick={() => setIsOpen(false)} className={style.link} to={"elaqe"}>ƏLAQƏ</Link>
      </div>
    </nav>
  )
}

export default MobileNavbar
