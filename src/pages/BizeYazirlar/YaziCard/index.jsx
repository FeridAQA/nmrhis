import React from 'react'
import style from "./index.module.scss"

function YaziCard(props) {

  return (
    <div className={style.container}>
      <h3
        className={`${style.writer} ${props.isFirstSlide ? style.firstSlide : ""}`}
      >
        {props.writer}
      </h3>
      <p
        className={`${style.content} ${props.isFirstSlide ? style.firstSlide : ""} ${props.truncate ? style.truncate : ""}`}
      >
        {props.content}
      </p>
      <span className={`${style.date} ${props.desktopDate ? "" : style.none}`}>{props.date}</span>
    </div>
  )
}

export default YaziCard
