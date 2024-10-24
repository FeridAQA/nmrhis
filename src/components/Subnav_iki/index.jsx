import React from "react";
import "./Leadership.scss";
import { Link, NavLink } from "react-router-dom";

const SubNavbar_iki = () => {
  return (
    <div id="SubNavbar_iki">
      <div className="tab-menu">
        <NavLink to="/struktur/uzv_teskilatlar" className="tab-item">Üzv Təşkilatlar</NavLink>
        <NavLink to="/struktur/tabe_teskilatlar" className="tab-item ">Tabe Təşkilatlar</NavLink>
        <NavLink to="/struktur/his_sobeleri" className="tab-item">HİŞ Şöbələri və Bölmələri</NavLink>
      </div>
    </div>
  );
};

export default SubNavbar_iki;
