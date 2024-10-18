import React from 'react'
import style from "./index.module.scss"

function STDContent({ content }) {
  return (
    <div className={style.container}>
      <p className={style.content}>{content}</p>
    </div>
  )
}

export default STDContent
