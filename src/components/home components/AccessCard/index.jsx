import React from 'react';
import style from "./index.module.scss";

function AccessCard({img, title}) {
  return (
    <>
      <a className={style.AccessCard}>
        <img alt='Icon' src={img} />
        <span className={style.title}>{title}</span>
      </a>
    </>
  )
}

export default AccessCard
