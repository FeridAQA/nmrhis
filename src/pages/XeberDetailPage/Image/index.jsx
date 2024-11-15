import React from 'react'
import style from "./index.module.scss"
import IconContainer from '../../../components/common components/SocialMediaIcons/IconContainer'
import ImageSlider from './ImageSlider'

function ImageBox({ images, children, date }) {
  return (
    <div className={style.container}>
      <div className={style.imgBox}>
        <ImageSlider images={images} />
        <h5 className={style.title}>{children}</h5>
      </div>
      <div className={style.infoBox}>
        <IconContainer />
        <span className={style.date}>{date}</span>
      </div>
    </div>
  )
}

export default ImageBox