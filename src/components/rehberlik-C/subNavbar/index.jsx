import React from "react";
import { NavLink } from "react-router-dom";
import "./Leadership.scss";

const SubNavbar = () => {
  return (
    <div className="leadership-container">
      <h2>RƏHBƏRLİK</h2>
      <hr />
      <div className="tabs">
        <NavLink
          to="/rehberlik/sedr"
          className="tab-link"
        >
          Sədr
        </NavLink>
        <NavLink
          to="/rehberlik/muavinler"
          className="tab-link"
        >
          Müavinlər
        </NavLink>
        <NavLink
          to="/rehberlik/katibler"
          className="tab-link"
        >
          Katiblər
        </NavLink>
      </div>
    </div>
  );
};

export default SubNavbar;
