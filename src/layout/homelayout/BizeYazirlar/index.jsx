import React from 'react'
import style from "./index.module.scss"
import Iphone12 from './../../../components/common components/Iphone12/index';
import Yazilar from './Yazilar';

function BizeYazirlar() {
  return (
    <div className={style.container}>

      <div className={style.content}>
        <h2 className={style.title}>Bizə yazırlar</h2>
        <Yazilar />
      </div>

      <Iphone12 src={
        "https://www.facebook.com/naxcivanhemkarlar?ref=embed_page"
      } />
    </div>
  )
}

export default BizeYazirlar
