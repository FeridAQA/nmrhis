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

      <Iphone12 image={
        "https://s3-alpha-sig.figma.com/img/eebf/98e6/41e61436e5f6f5089dcc3b2afbd758de?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cXG7JxEGF9MPoNw9AXEAo7uZA8JVljT8CXc183d2SAqQkgngHxFj~U3IWQAZv8JspdoHxE9ib2btWur17CyHB1SmPoatKXQ5aujsBOtOinpa5-D6KtIoeT-FzbSJOWrDTvQN31UkfVvcqMOEpJecRdK5hVTJkxTMtsLeKy~YqbuTYm2BQpUhjF7Kihv1OfxRBc8sgTTOqjIi-I6VsBaKg-Ts4fZ-mNqoiJaMcNhh5tH86J42b7GzEUZXie6M3UbrUgidWMhP95uqB5WigAGNCFQqaUTfC~WCK8xjHa5MUSAhYeS2friFInX-Kd~C8z3Ua5jzQWBE7u7~TOinoSTOVA__"
      } />
    </div>
  )
}

export default BizeYazirlar
