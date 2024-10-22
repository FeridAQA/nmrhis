import React from 'react'
import style from "./index.module.scss"

function STDContent({ children }) {
  return (
    <div className={style.container}>
      <p className={style.content}>{children}</p>
    </div>
  )
}

export default STDContent
