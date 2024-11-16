import React from 'react'
import style from "./index.module.scss"
import { OnlyDate } from '../../../funcs/tarix'
import { useNavigate } from 'react-router-dom'

function YaziCard(props) {

  const navigate = useNavigate()

  function Detail(id) {
    navigate(`${id}`)
  }

  return (
    <div className={style.container} onClick={() => Detail(props.id)}>
      <h3
        className={`${style.writer} ${props.isFirstSlide ? style.firstSlide : ""}`}
      >
        {props.baslik}
      </h3>
      <p
        className={`${style.content} ${props.isFirstSlide ? style.firstSlide : ""} ${props.truncate ? style.truncate : ""}`}
      >
        {props.mesaj}
      </p>
      <span className={`${style.date} ${props.desktopDate ? "" : style.none}`}>{OnlyDate(props.tarix)}</span>
    </div>
  )
}

export default YaziCard
