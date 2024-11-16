import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import IconContainer from '../../../components/common components/SocialMediaIcons/IconContainer'
import { baseURL } from '../../../confiq'
import YaziCard from '../../BizeYazirlar/YaziCard'
import CalendarContainer from '../Calendar'
import BizeYazirlarSwiper from '../Swiper'
import style from "./index.module.scss"

function BizeYazirlarDetailContainer() {

  const { id } = useParams()

  const [Data, setData] = useState([])

  async function GetData() {
    try {
      const response = await (await axios.get(baseURL.concat(`bize-yazirlar/${id}`))).data
      console.log(response);
      setData(response[0])

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <div className={style.container}>
      <div className={style.content}>

        <div className={style.leftBox}>
          <YaziCard isFirstSlide={true} desktopDate={true} {...Data} />
          <IconContainer />
        </div>

        <div className={style.rightBox}>
          <CalendarContainer date={Data.tarix} />
        </div>

      </div>
      <BizeYazirlarSwiper />
    </div>
  )
}

export default BizeYazirlarDetailContainer
