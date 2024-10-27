import React from 'react'
import style from "./index.module.scss"

function PDFBlock({ src }) {
  return (
    <div className={style.container}>
      <iframe
        className={style.pdf}
        src={src}
      ></iframe>
    </div>
  )
}

export default PDFBlock
