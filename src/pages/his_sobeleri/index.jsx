import React from 'react'
import SubNavbar_iki from '../../components/Subnav_iki'
import style from "./index.module.scss"
import MekanSlider from '../../layout/commonlayout/MekanSlider'
import His_Container from './Container'
import { Helmet } from 'react-helmet-async'
import PageTitle from '../../components/common components/PageTitle'

function His_sobeleri() {
  return (
    <div id='His_sobeleri'>
      <Helmet>
        <title>HİŞ Şöbələri</title>
      </Helmet>
      {/* <SubNavbar_iki></SubNavbar_iki> */}
      <PageTitle>HİŞ Şöbələrİ və Bölmələrİ</PageTitle>
      <div className={style.container}>
        <His_Container />
        <MekanSlider />
      </div>
    </div>
  )
}

export default His_sobeleri