import React from 'react'
import style from "./index.module.scss"

function ContentBox({ children, date }) {
  return (
    <div className={style.container}>
      <p className={style.content}>{children}</p>
      <p className={style.date}>{date}</p>
    </div>
  )
}

export default ContentBox
