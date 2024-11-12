import React from 'react'
import style from "./index.module.scss"
import PageTitle from '../../components/common components/PageTitle'
import BizeYazirlarDetailContainer from './Container'

function BizeYazirlarDetailPage() {
  return (
    <div className={style.container}>
      <div className={style.titleBox}>
        <PageTitle>Bizə Yazırlar</PageTitle>
      </div>
      <BizeYazirlarDetailContainer />
    </div>
  )
}

export default BizeYazirlarDetailPage
