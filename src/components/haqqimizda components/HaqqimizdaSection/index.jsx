import React from 'react'
import style from "./index.module.scss";

function HaqqimizdaSection({ title, children }) {

  return (
    <div className={style.container}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.content}>{children}</p>
    </div>
  )
}

export default HaqqimizdaSection
