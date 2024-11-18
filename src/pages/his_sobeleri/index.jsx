import React from 'react'
import SubNavbar_iki from '../../components/Subnav_iki'
import style from "./index.module.scss"
import MekanSlider from '../../layout/commonlayout/MekanSlider'
import His_Container from './Container'
import { Helmet } from 'react-helmet-async'

function His_sobeleri() {
  return (
    <div id='His_sobeleri'>
      <Helmet>
        <title>HİŞ Şöbələri</title>
      </Helmet>
      <SubNavbar_iki></SubNavbar_iki>
      <div className={style.container}>
        <His_Container />
        <MekanSlider />
      </div>
    </div>
  )
}

export default His_sobeleri