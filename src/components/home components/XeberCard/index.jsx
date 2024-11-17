import React from 'react'
import style from "./index.module.scss";
import { useNavigate } from 'react-router-dom';
import { FormatDate } from '../../../funcs/tarix';
import { imageURL } from '../../../confiq';

function XeberCard({ image, title, description, id }) {

  const navigation = useNavigate()

  function handleClick(id) {
    navigation(`/xeber/${id}`)
  }

  const tarix = FormatDate(description)


  return (
    <div className={style.XeberCard}>
      <div className={style.imgBox}>
        <img alt='NewsPhoto' src={imageURL.concat(image)} />
      </div>
      <div className={style.content}>
        <div className={style.textBox}>
          <span className={style.title}>{title}</span>
          <span className={style.description}>{tarix}</span>
        </div>
        <button onClick={() => handleClick(id)} className={style.btn}>Ətraflı</button>
      </div>
    </div>
  )
}

export default XeberCard
