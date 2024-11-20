import React from 'react'
import style from "./index.module.scss"
import Yazilar from './Yazilar';
import Iphone13 from '../../../components/common components/Iphone13';

function BizeYazirlar() {
  return (
    <div className={style.container}>

      <div className={style.content}>
        <h2 className={style.title}>Bizə yazırlar</h2>
        <Yazilar />
      </div>

      <Iphone13 />
    </div>
  )
}

export default BizeYazirlar
