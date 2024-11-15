import React from 'react'
import style from "./index.module.scss";

function FotoXronikaCard({ image, date }) {

  const url = "https://api.nmrhis.az/uploads/"

  return (
    <div className={style.FotoXronikaCard}>
      <div className={style.imgBox}>
        <img alt='Photo' src={url.concat(image)} />
      </div>
      {date ? <span className={style.date}>{date}</span> : ""}
    </div>
  )
}

export default FotoXronikaCard
