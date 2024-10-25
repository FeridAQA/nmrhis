import React from 'react'
import style from "./index.module.scss"
import Gerb from "./../../../assets/img/NMR-HIŞ.png"
import SonXeberCard from './../SonXeberCard/index';

function CardHolder({ data, path }) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        {data.map((item, i) => (
          <SonXeberCard
            key={i}
            title={item.title}
            image={item.image}
            date={item.description}
            path={path}
          />
        ))}
      </div>
      <img className={"Gerb"} id={"bottom"} src={Gerb} />
    </div>
  )
}

export default CardHolder
