import React from 'react'
import style from "./index.module.scss";

function FotoXronikaCard({ image, date }) {
  return (
    <div className={style.FotoXronikaCard}>
      <div className={style.imgBox}>
        <img alt='Photo' src={image} />
      </div>
      {date ? <span className={style.date}>{date}</span> : ""}
    </div>
  )
}

export default FotoXronikaCard
