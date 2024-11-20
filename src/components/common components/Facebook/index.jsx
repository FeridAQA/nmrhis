import React from "react";
import style from "./index.module.scss";
import IPhone from "./../../../assets/img/IphoneFrame(6).png";

function Facebook({ children }) {
  return (
    <div className={style.container}>
      <img id={style.phone} src={IPhone} alt="iPhone Frame" />
      <div className={style.iphoneCon}>
        {children}
      </div>
    </div>
  );
}

export default Facebook;
