import React from 'react'
import style from "./index.module.scss";
import IPhone from "./../../../assets/img/IphoneFrame(6).png";

function Iphone12({ image }) {
  return (
    <div className={style.container}>
      <img id={style.phone} src={IPhone} />
      <div className={style.iphoneCon}>
        <img id={style.screen} src={image} />
      </div>
    </div>
  )
}

export default Iphone12
