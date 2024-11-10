import React from 'react'
import style from "./index.module.scss";

function MekanCardWithTitle({ image, title }) {
  return (
    <div className={style.MekanCardWithTitle}>
      <div className={style.imgBox}>
        <img alt='Photo' src={image} />
      </div>
      {title ? <span className={style.title}>{title}</span> : ""}
    </div>
  )
}

export default MekanCardWithTitle
