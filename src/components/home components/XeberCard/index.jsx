import React from 'react'
import style from "./index.module.scss";
import { useNavigate } from 'react-router-dom';

function XeberCard({ image, title, description }) {

  const navigation = useNavigate()

  function handleClick(id) {
    navigation(`/xeber/${id}`)
  }

  return (
    <div className={style.XeberCard}>
      <div className={style.imgBox}>
        <img alt='NewsPhoto' src={image} />
      </div>
      <div className={style.content}>
        <div className={style.textBox}>
          <span className={style.title}>{title}</span>
          <span className={style.description}>{description}</span>
        </div>
        <button onClick={() => handleClick(1)} className={style.btn}>Ətraflı</button>
      </div>
    </div>
  )
}

export default XeberCard
