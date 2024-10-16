import React from 'react'
import style from "./index.module.scss"

function ContentBox({ children }) {
  return (
    <div className={style.container}>
      <p className={style.content}>{children}</p>
    </div>
  )
}

export default ContentBox
