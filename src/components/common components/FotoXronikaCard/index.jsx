import React from 'react'
import style from "./index.module.scss";

function FotoXronikaCard({ image }) {
  return (
    <div className={style.FotoXronikaCard}>
      <div className={style.imgBox}>
        <img alt='Photo' src={image} />
      </div>
    </div>
  )
}

export default FotoXronikaCard