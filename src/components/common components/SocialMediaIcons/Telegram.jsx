import React from 'react'
import style from "./index.module.scss";
import { Link } from 'react-router-dom';

function TelegramIcon({ to }) {
  return (
    <Link to={to} className={`${style.icon} ${style.telegram}`}>
      <i className={`fa-brands fa-telegram`}></i>
    </Link>
  )
}

export default TelegramIcon
