import React, { useEffect, useState } from 'react'
import STDContent from '../Content'
import STDImage from '../Image'
import Gerb from "./../../../assets/img/NMR-HIŞ.png"
import style from "./index.module.scss"
import PDFBlock from './../../commonlayout/PDFBlock/index';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../../confiq'
import { FormatDate } from '../../../funcs/tarix'
import SonXeberler from '../../commonlayout/SonXeberler'
import YTBlock from '../../commonlayout/YTBlock'

function STDContainer() {

  const { id } = useParams()

  const [Data, setData] = useState([])
  const [Images, setImages] = useState([])

  async function GetData() {
    try {
      const response = await (await axios.get(baseURL.concat(`news/${id}`))).data
      console.log((await axios.get(baseURL.concat(`news/${id}`))));
      setData(response[0])
      setImages(response[0].images.split(","))

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetData()
  }, [id])

  useEffect(() => {
    GetData()
  }, [])

  return (
    <div className={style.container}>
      <div className={style.box}>
        <h2 className={style.title}>{Data.baslik}</h2>
        <div className={style.content}>
          <STDContent>{Data && Data.mesaj}</STDContent>
          <STDImage
            images={Images && Images}
            date={Data && FormatDate(Data.tarix)}
          />
        </div>
      </div>

      {Data && Data.youtube ? <YTBlock src={Data.youtube} /> : ""}
      {Data && Data.pdf ? <PDFBlock src={Data && Data.pdf} /> : ""}
      <img className={`Gerb`} id={"top"} src={Gerb} />
      <img className={"Gerb"} id={'bottom'} src={Gerb} />

      <SonXeberler />
    </div>
  )
}

export default STDContainer
