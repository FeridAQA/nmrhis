import React from 'react'
import PageTitle from '../../../components/common components/PageTitle'
import STDContainer from '../../../layout/SosialTerefdasliq/Container'
import { Helmet } from 'react-helmet-async'
import style from "./index.module.scss"

function SosialTerefdasliqDetail() {
  return (
    <div className={style.container}>
      <Helmet>
        <title>Sosial Tərəfdaşlıq - HİŞ </title>
      </Helmet>
      <PageTitle>Sosial Tərəfdaşlıq</PageTitle>
      <STDContainer />
    </div>
  )
}

export default SosialTerefdasliqDetail
