import React from 'react'
import style from "./index.module.scss";
import { useNavigate } from 'react-router-dom';
import { imageURL } from '../../../confiq';
import { FormatDate } from '../../../funcs/tarix';

function SonXeberCard({ image, title, date, id = 0, path = "xeber" }) {

  const navigate = useNavigate()

  function handleNavigate(path, id) {
    navigate(`/${path}/${id}`)
  }

  return (
    <div className={style.SonXeberCard}>
      <div className={style.imgBox}>
        <img alt='NewsPhoto' src={imageURL.concat(image)} />
      </div>
      <div className={style.content}>
        <div className={style.textBox}>
          <span className={style.title}>{title}</span>
          <time className={style.date}>{FormatDate(date)}</time>
        </div>
        <button onClick={() => handleNavigate(path, id)} className={style.btn}>Ətraflı</button>
      </div>
    </div>
  )
}

export default SonXeberCard
