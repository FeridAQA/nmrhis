import React from 'react'
import style from "./index.module.scss";
import { useNavigate } from 'react-router-dom';
import { FormatDate } from '../../../funcs/tarix';

function XeberCard({ image, title, description }) {

  const navigation = useNavigate()

  const url = "https://api.nmrhis.az/uploads/"

  function handleClick(id) {
    navigation(`/xeber/${id}`)
  }

  const tarix = FormatDate(description)


  return (
    <div className={style.XeberCard}>
      <div className={style.imgBox}>
        <img alt='NewsPhoto' src={url.concat(image)} />
      </div>
      <div className={style.content}>
        <div className={style.textBox}>
          <span className={style.title}>{title}</span>
          <span className={style.description}>{tarix}</span>
        </div>
        <button onClick={() => handleClick(1)} className={style.btn}>Ətraflı</button>
      </div>
    </div>
  )
}

export default XeberCard
