import React from 'react'
import style from "./index.module.scss"
import IconContainer from '../../../../components/common components/SocialMediaIcons/IconContainer'

function ImageBox({ image, children, date }) {
  return (
    <div className={style.container}>
      <h5 className={style.title} id={style.dekstop}>{children}</h5>
      <div className={style.imgBox}>
        <img src={image} />
        <h5 className={style.title}>{children}</h5>
      </div>
      <div className={style.infoBox}>
        <span className={style.date}>{date}</span>
        <IconContainer />
      </div>
    </div>
  )
}

export default ImageBox