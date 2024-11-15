import React from 'react'
import style from "./index.module.scss"
import YaziCard from '../../BizeYazirlar/YaziCard'
import YaziData from '../../../Data/YaziData'
import CalendarContainer from '../Calendar'
import IconContainer from '../../../components/common components/SocialMediaIcons/IconContainer'
import BizeYazirlarSwiper from '../Swiper'

function BizeYazirlarDetailContainer() {
  return (
    <div className={style.container}>
      <div className={style.content}>

        <div className={style.leftBox}>
          <YaziCard isFirstSlide={true} desktopDate={true} {...YaziData[0]} />
          <IconContainer />
        </div>

        <div className={style.rightBox}>
          <CalendarContainer />
        </div>

      </div>
      <BizeYazirlarSwiper />
    </div>
  )
}

export default BizeYazirlarDetailContainer
