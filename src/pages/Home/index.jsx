import React from 'react'
import Ana_s_fealiyet from '../../components/faliyetlerimiz_ana_seife'
import Main_header from '../../components/header_copm'
import Resmi_xronika from '../../components/resmi_xronika'
import FotoXronikaSlider from '../../layout/commonlayout/FotoXronikaSlider'
import MekanSlider from '../../layout/commonlayout/MekanSlider'
import BizeYazirlar from '../../layout/homelayout/BizeYazirlar'
import QuickAccessPanel from '../../layout/homelayout/QuickAccessPanel'
import XeberSwiper from '../../layout/homelayout/XeberSwiper'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <>
      <Helmet>
        <title>Ana Səhifə - Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurası </title>
      </Helmet>
      <Main_header></Main_header>
      <XeberSwiper />
      <Resmi_xronika></Resmi_xronika>
      <Ana_s_fealiyet />
      <QuickAccessPanel />
      <BizeYazirlar />
      <FotoXronikaSlider />
      <MekanSlider />
    </>
  )
}

export default Home