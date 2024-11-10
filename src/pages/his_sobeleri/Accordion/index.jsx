import React, { useState } from 'react'
import style from "./index.module.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Sobe_Accordion(props) {

  const [accordion, setAccordion] = useState(false)

  function handleAccordion() {
    setAccordion(!accordion)
  }

  return (
    <div className={style.container}>

      <div
        className={`${style.titleBox} ${accordion ? style.active : ""}`}
        onClick={handleAccordion}
      >
        <h3 className={style.title}>{props.title}</h3>
        <ArrowForwardIosIcon className={`${style.icon} ${accordion ? style.active : ""}`} />
      </div>

      <div
        className={`${style.content} ${accordion ? style.active : ""}`}
      >

        <p className={style.textBox}>
          Mudiri: <span className={style.text}>{props.mudir}</span>
        </p>
        <p className={style.textBox}>
          Tel: <span className={style.text} dangerouslySetInnerHTML={{ __html: props.tel }}></span>
        </p>
        {props.email && <p className={style.textBox}>
          Email: <span className={style.text}>{props.mudir}</span>
        </p>}

      </div>

    </div>
  )
}

export default Sobe_Accordion
