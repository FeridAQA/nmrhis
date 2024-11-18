import React, { useEffect, useState } from 'react'
import FealiyyetimizContainer from '../Detail Layout/Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FormatDate } from '../../../funcs/tarix'
import { baseURL } from '../../../confiq'

function EmekHuqulariDetail() {

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
  }, [])

  return (
    <>
      <FealiyyetimizContainer
        pageTitle={"Əmək Hüquqları"}
        images={Images}
        date={FormatDate(Data.tarix)}
        xeberTitle={Data.baslik}
        content={Data.mesaj}
        pdf={Data.pdf && Data.pdf}
        yt={Data.yt && Data.yt}
      />
    </>
  )
}

export default EmekHuqulariDetail
