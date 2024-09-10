import React, { useState } from 'react';
import style from "./index.module.scss";

function Dropdown({ title, children }) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={style.dropdown}>
      <div className={style.titleBox} onClick={() => setIsOpen(!isOpen)}>
        <span className={style.title}>{title}</span>
        <i className={`fa-solid fa-angle-right ${style.icon} ${isOpen ? style.clicked : ""}`}></i>
      </div>
      <div className={`${style.subMenu} ${isOpen ? style.open : ""}`}>
        {children}
      </div>
    </div>
  )
}

export default Dropdown
