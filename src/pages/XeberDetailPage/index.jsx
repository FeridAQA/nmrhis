import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/common components/PageTitle';
import { baseURL } from '../../confiq';
import { FormatDate } from '../../funcs/tarix';
import SonXeberler from '../../layout/commonlayout/SonXeberler';
import Gerb from "./../../assets/img/NMR-HIŞ.png";
import ContentBox from './Content';
import ImageBox from './Image';
import style from "./index.module.scss";

function XeberDetailPage() {

  const { id } = useParams()

  const [Data, setData] = useState([])
  const [Images, setImages] = useState([])

  async function GetData() {
    try {
      const response = await (await axios.get(baseURL.concat(`news/${id}`))).data
      // console.log(response[0].images.split(","));
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
      <div className={style.container}>
        <PageTitle>AHIK Xəbərləri</PageTitle>
        <div className={style.xeberBox}>
          <ImageBox
            images={Images}
            date={FormatDate(Data.tarix)}
          >
            {Data.baslik}
          </ImageBox>
          <ContentBox date={FormatDate(Data.tarix)}>
            {Data.mesaj}
          </ContentBox>
        </div>
        <hr className={`line`} />
        <SonXeberler />
        <img className={"Gerb"} id={"bottom"} src={Gerb} />
        <img className={"Gerb"} id={"top"} src={Gerb} />
      </div>
    </>
  )
}

export default XeberDetailPage
