import React, { Fragment } from 'react'
import style from "./index.module.scss"
import HisSobeData from '../../../Data/HisSobeData'
import Sobe_Accordion from '../Accordion'

function His_Container() {
  return (
    <div className={style.container}>
      {HisSobeData && HisSobeData.map((item, i) => (
        <Sobe_Accordion key={i} {...item} />
      ))}
    </div>
  )
}

export default His_Container
