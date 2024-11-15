import React from 'react'
import style from "./index.module.scss"

function YaziCard(props) {
  return (
    <div className={style.container}>
      <h3 className={style.writer}>{props.writer}</h3>
      <p className={style.content}>{props.content}</p>
    </div>
  )
}

export default YaziCard
