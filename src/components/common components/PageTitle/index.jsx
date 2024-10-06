import React from 'react'
import style from "./index.module.scss";

function PageTitle({ children }) {
  return (
    <div className={style.titleBox}>
      <h1 className={style.title}>{children}</h1>
    </div>
  )
}

export default PageTitle
