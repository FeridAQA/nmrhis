import React from 'react'
import style from "./index.module.scss"
import IconContainer from './../../../components/common components/SocialMediaIcons/IconContainer'
import ImageSlider from './ImageSlider'

function ImageBox({ images, date }) {
  return (
    <div className={style.container}>
      <ImageSlider images={images} />
      <div className={style.infoBox}>
        <span className={style.date}>{date}</span>
        <IconContainer />
      </div>
    </div>
  )
}

export default ImageBox