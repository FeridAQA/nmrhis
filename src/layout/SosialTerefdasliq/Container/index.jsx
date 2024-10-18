import React from 'react'
import style from "./index.module.scss"
import PDFBlock from '../../commonlayout/PDFBlock'
import STDContent from '../Content'
import STDImage from '../Image'

function STDContainer() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Baş kollektiv saziş, 7 fevral 2018-ci il Q Ə R A R (№ 36)</h2>
      <div className={style.content}>
        <STDContent />
        <STDImage />
      </div>
      <PDFBlock />
    </div>
  )
}

export default STDContainer
