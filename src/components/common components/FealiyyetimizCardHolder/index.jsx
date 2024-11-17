import React from 'react'
import style from "./index.module.scss"
import Gerb from "./../../../assets/img/NMR-HIŞ.png"
import SonXeberCard from './../SonXeberCard/index';

function CardHolder({ data, path }) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        {data && data.map((item, i) => (
          <SonXeberCard
            key={i}
            id={item.id}
            title={item.baslik}
            image={item.baslik_foto_url}
            date={item.tarix}
            path={path}
          />
        ))}
      </div>
      <img className={"Gerb"} id={"bottom"} src={Gerb} />
    </div>
  )
}

export default CardHolder
