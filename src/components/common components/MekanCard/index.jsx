import React from 'react'
import style from "./index.module.scss";
import { useNavigate } from 'react-router-dom';

function MekanCard({ image, title, description, id }) {

  const navigate = useNavigate()

  function handleNavigate() {
    navigate(`/struktur/tabe_teskilatlar/${id}`)
  }

  return (
    <div className={style.MekanCard}>
      <div className={style.imgBox}>
        <img alt='NewsPhoto' src={image} />
      </div>
      <div className={style.content}>
        <div className={style.textBox}>
          <span className={style.title}>{title}</span>
          <p className={style.description}>{description}</p>
        </div>
        <button
          onClick={handleNavigate}
          className={style.btn}>
          Ətraflı
        </button>
      </div>
    </div>
  )
}

export default MekanCard
