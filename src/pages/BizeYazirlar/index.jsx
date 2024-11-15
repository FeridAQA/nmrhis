import React from 'react'
import style from "./index.module.scss"
import PageTitle from '../../components/common components/PageTitle'
import BizeYazirlarContainer from './Container'

function BizeYazirlarPage() {
  return (
    <div className={style.container}>
      <div className={style.titleBox}>
        <PageTitle>Bizə Yazırlar</PageTitle>
      </div>
      <BizeYazirlarContainer />
    </div>
  )
}

export default BizeYazirlarPage
