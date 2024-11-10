import React from 'react'
import SubNavbar_iki from '../../components/Subnav_iki'
import style from "./index.module.scss"
import MekanSlider from '../../layout/commonlayout/MekanSlider'
import His_Container from './Container'

function His_sobeleri() {
  return (
    <div id='His_sobeleri'>
      <SubNavbar_iki></SubNavbar_iki>
      <div className={style.container}>
        <His_Container />
        <MekanSlider />
      </div>
    </div>
  )
}

export default His_sobeleri