import React from 'react'
import style from "./index.module.scss"
import IconContainer from './../../../components/common components/SocialMediaIcons/IconContainer'

function ImageBox({ image, date }) {
  return (
    <div className={style.container}>
      <div className={style.imgBox}>
        <img src={image} />
      </div>
      <div className={style.infoBox}>
        <span className={style.date}>{date}</span>
        <IconContainer />
      </div>
    </div>
  )
}

export default ImageBox