import React from "react";
import style from "./index.module.scss";
import IPhone from "./../../../assets/img/IphoneFrame(6).png";

function Iphone12({ src }) {
  return (
    <div className={style.container}>
      <img id={style.phone} src={IPhone} alt="iPhone Frame" />
      <div className={style.iphoneCon}>
        <iframe
          id={style.screen}
          loading="lazy"
          src={src}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>
    </div>
  );
}

export default Iphone12;
