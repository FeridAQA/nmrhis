import React from 'react'
import style from "./index.module.scss"
import { imageURL } from '../../../confiq'

function PDFBlock(props) {
  return (
    <div className={style.container}>
      <iframe
        className={style.pdf}
        loading="lazy"
        allow="accelerometer; autoplay; gyroscope; clipboard-write; encrypted-media; picture-in-picture; web-share"
        src={props.src && props.src.startsWith("pdfFiles") ? imageURL.concat(props.src) : props.src}
      ></iframe>
    </div>
  )
}
// https://www.orimi.com/pdf-test.pdf

export default PDFBlock
