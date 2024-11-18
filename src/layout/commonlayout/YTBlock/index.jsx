import React from 'react'
import { youtubeURL } from '../../../confiq'
import style from "./index.module.scss"

function YTBlock({ src }) {
  return (
    <div className={style.container}>
      <iframe
        className={style.pdf}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        src={src && src.startsWith("http") ? src : youtubeURL.concat(src)}
      ></iframe>
    </div>
  )
}

export default YTBlock
