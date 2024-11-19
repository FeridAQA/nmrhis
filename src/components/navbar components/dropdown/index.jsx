import React, { Fragment, useState } from 'react';
import style from "./index.module.scss";
import { Link } from 'react-router-dom';

function Dropdown({ title, data, setOpen }) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={style.dropdown}>
      <div className={style.titleBox} onClick={() => setIsOpen(!isOpen)}>
        <span className={style.title}>{title}</span>
        <i className={`fa-solid fa-angle-right ${style.icon} ${isOpen ? style.clicked : ""}`}></i>
      </div>
      <ul className={`${style.subMenu} ${isOpen ? style.open : ""}`}>

        {data && data.map((item, i) => (
          <Fragment key={i}>
            <li className={style.item}>
              <Link onClick={() => setOpen(false)} to={item.to}>{item.title}</Link>
            </li>
            <li className={style.line}></li>
          </Fragment>
        ))}

      </ul>
    </div>
  )
}

export default Dropdown
