import React from 'react'
import style from "./index.module.scss";
import { Link } from 'react-router-dom';

function TwitterIcon({ to }) {
  return (
    <Link to={to} className={`${style.icon} ${style.twitter}`}>
      <i className={`fa-brands fa-twitter`}></i>
    </Link>
  )
}

export default TwitterIcon
