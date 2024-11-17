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
        "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnaxcivanhemkarlar&tabs=timeline&width=370&height=700&small_header=TRUE&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=101314603307092"
      } />
    </div>
  )
}

export default BizeYazirlar
