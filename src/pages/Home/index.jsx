import React from 'react'
import QuickAccessPanel from '../../layout/homelayout/QuickAccessPanel'
import XeberSwiper from '../../layout/homelayout/XeberSwiper'
import MekanSlider from '../../layout/commonlayout/MekanSlider'
import FotoXronikaSlider from '../../layout/commonlayout/FotoXronikaSlider'
import MekanSliderWithNav from '../../components/common components/MekanSliderWithNav'
import Main_header from '../../components/header_copm'
import Resmi_xronika from '../../components/resmi_xronika'
import Iphone12 from '../../components/common components/Iphone12'
import Ana_s_fealiyet from '../../components/faliyetlerimiz_ana_seife'
import BizeYazirlar from '../../layout/homelayout/BizeYazirlar'

function Home() {
  return (
    <>
      <Main_header></Main_header>
      <XeberSwiper />
      <Resmi_xronika></Resmi_xronika>
      <QuickAccessPanel />
      <Ana_s_fealiyet />
      <BizeYazirlar />
      <FotoXronikaSlider />
      <MekanSlider />

    </>
  )
}

export default Home