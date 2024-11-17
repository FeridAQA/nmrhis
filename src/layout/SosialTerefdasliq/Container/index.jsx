import React, { useEffect, useState } from 'react'
import STDContent from '../Content'
import STDImage from '../Image'
import Gerb from "./../../../assets/img/NMR-HIŞ.png"
import style from "./index.module.scss"
import PDF from "./../../../TEST/PythonParallelProgramming.pdf"
import PDFBlock from './../../commonlayout/PDFBlock/index';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../../confiq'
import { FormatDate } from '../../../funcs/tarix'
import SonXeberler from '../../commonlayout/SonXeberler'

function STDContainer() {

  const { id } = useParams()

  const [Data, setData] = useState([])
  const [Images, setImages] = useState([])

  async function GetData() {
    try {
      const response = await (await axios.get(baseURL.concat(`news/${id}`))).data
      // console.log(response[0]);
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
          <STDContent>{Data.mesaj}</STDContent>
          <STDImage
            images={Images}
            date={FormatDate(Data.tarix)}
          />
        </div>
      </div>
      <PDFBlock src={PDF} />
      <img className={`Gerb`} id={"top"} src={Gerb} />
      <img className={"Gerb"} id={'bottom'} src={Gerb} />

      <SonXeberler />
    </div>
  )
}

export default STDContainer
