import React from 'react'
import style from "./index.module.scss";

function SonXeberCard({ image, title, date }) {
  return (
    <div className={style.SonXeberCard}>
      <div className={style.imgBox}>
        <img alt='NewsPhoto' src={image} />
      </div>
      <div className={style.content}>
        <div className={style.textBox}>
          <span className={style.title}>{title}</span>
          <time className={style.date}>{date}</time>
        </div>
        <button className={style.btn}>Ətraflı</button>
      </div>
    </div>
  )
}

export default SonXeberCard
