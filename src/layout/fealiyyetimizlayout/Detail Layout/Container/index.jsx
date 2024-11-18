import React from 'react'
import style from "./index.module.scss"
import PageTitle from '../../../../components/common components/PageTitle'
import ImageBox from '../Image/index'
import ContentBox from '../Content'
import SonXeberler from '../../../commonlayout/SonXeberler'
import Gerb from "./../../../../assets/img/NMR-HIŞ.png"
import PDFBlock from '../../../commonlayout/PDFBlock'
import YTBlock from '../../../commonlayout/YTBlock'

function FealiyyetimizContainer(props) {
  return (
    <>
      <div className={style.container}>
        <PageTitle>{props.pageTitle}</PageTitle>
        <div className={style.xeberBox}>
          <ImageBox
            images={props.images}
            date={props.date}
          >
            {props.xeberTitle}
          </ImageBox>
          <ContentBox date={props.date}>
            {props.content}
          </ContentBox>
        </div>
        {props.yt ? <YTBlock src={props.yt} /> : ""}
        {props.pdf ? <PDFBlock src={props.pdf} /> : ""}
        <hr className={`line`} />
        <SonXeberler />
        <img className={"Gerb"} id={"bottom"} src={Gerb} />
      </div>
    </>
  )
}

export default FealiyyetimizContainer
