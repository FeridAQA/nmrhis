import React from 'react';
import style from "./index.module.scss";
import Gerb from "./../../assets/img/NMR-HIŞ.png"
import XeberCard from '../../components/home components/XeberCard';

function XeberlerPage() {
  return (
    <div className={style.XeberlerPage}>
      <div className={style.titleBox}>
        <h1 className={style.title}>XƏBƏRLƏR</h1>
        <div className={style.line}></div>
      </div>

      <div className={style.content}>
        {[1, 2, 3, 1, 2, 3, 2, 3, 3, 2, 2, 21, 2, 3, 3].map((item, i) => (
          <XeberCard
            key={i}
            title={"“Azərbaycan Silahlı Qüvvələrinin qüdrəti ilbəil yüksəlir”"}
            description={"22 iyul 2024 16:07"}
            image={"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"}
          />
        ))}
      </div>
      <img className={"Gerb"} id={"bottom"} src={Gerb} />
    </div>
  )
}

export default XeberlerPage
