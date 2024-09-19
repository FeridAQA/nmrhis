import React from 'react'
import style from "./index.module.scss";

function XeberCard({ image, title, description }) {
  return (
    <div className={style.XeberCard}>
      <div className={style.imgBox}>
        <img alt='NewsPhoto' src={image} />
      </div>
      <div className={style.content}>
        <div className={style.textBox}>
          <span className={style.title}>{title}</span>
          <span className={style.description}>{description}</span>
        </div>
        <button className={style.btn}>Ətraflı</button>
      </div>
    </div>
  )
}

export default XeberCard
