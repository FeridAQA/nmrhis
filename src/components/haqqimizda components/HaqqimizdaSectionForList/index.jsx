import React from 'react'
import style from "./index.module.scss";

function HaqqimizdaSectionForList({ title, data }) {

  return (
    <div className={style.container}>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.content}>
        {data && data.map((content, i) => (
          <li key={i}>{content}</li>
        ))}
      </ul>
    </div>
  )
}

export default HaqqimizdaSectionForList
