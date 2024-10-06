import React from 'react'
import style from "./index.module.scss";
import { Link } from 'react-router-dom';

function MailIcon({ to }) {
  return (
    <Link to={to} className={`${style.icon} ${style.mail}`}>
      <i className={`fa-regular fa-envelope`}></i>
    </Link>
  )
}

export default MailIcon
