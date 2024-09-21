import React from 'react'
import style from "./index.module.scss";

function MekanCard({ image, title, description }) {
  return (
    <div className={style.MekanCard}>
      <div className={style.imgBox}>
        <img alt='NewsPhoto' src={image} />
      </div>
      <div className={style.content}>
        <div className={style.textBox}>
          <span className={style.title}>{title}</span>
          <time className={style.description}>{description}</time>
        </div>
        <button className={style.btn}>Ətraflı</button>
      </div>
    </div>
  )
}

export default MekanCard
