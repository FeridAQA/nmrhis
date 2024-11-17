import React from 'react'
import style from "./index.module.scss"
import PageTitle from '../../../../components/common components/PageTitle'
import ImageBox from '../Image/index'
import ContentBox from '../Content'
import SonXeberler from '../../../commonlayout/SonXeberler'
import Gerb from "./../../../../assets/img/NMR-HIŞ.png"

function FealiyyetimizContainer({ pageTitle, date, images, content, xeberTitle }) {
  return (
    <>
      <div className={style.container}>
        <PageTitle>{pageTitle}</PageTitle>
        <div className={style.xeberBox}>
          <ImageBox
            images={images}
            date={date}
          >
            {xeberTitle}
          </ImageBox>
          <ContentBox date={date}>
            {content}
          </ContentBox>
        </div>
        <hr className={`line`} />
        <SonXeberler />
        <img className={"Gerb"} id={"bottom"} src={Gerb} />
      </div>
    </>
  )
}

export default FealiyyetimizContainer
