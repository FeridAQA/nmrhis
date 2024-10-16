import React from 'react'
import style from "./index.module.scss"
import IconContainer from '../../../../components/common components/SocialMediaIcons/IconContainer'

function ImageBox({ image, children, date }) {
  return (
    <div className={style.container}>
      <div className={style.imgBox}>
        <img src={image} />
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