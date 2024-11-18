import React from 'react'
import style from "./index.module.scss"
import { imageURL } from '../../../confiq'

function PDFBlock(props) {
  return (
    <div className={style.container}>
      <iframe
        className={style.pdf}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        src={props.src && props.src.startsWith("pdfFiles") ? imageURL.concat(props.src) : props.src}
      ></iframe>
    </div>
  )
}

export default PDFBlock
