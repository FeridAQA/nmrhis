import React from 'react'
import style from "./index.module.scss"

function YaziCard(props) {
  return (
    <div className={style.container}>
      <h3 className={style.writer}>{props.baslik}</h3>
      <p className={style.content}>{props.mesaj}</p>
    </div>
  )
}

export default YaziCard
