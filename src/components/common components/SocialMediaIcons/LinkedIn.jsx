import React from 'react';
import { Link } from 'react-router-dom';
import style from "./index.module.scss";

function LinkedinIcon({ to }) {
  return (
    <Link to={to} className={`${style.icon} ${style.linkedin}`}>
      <i className={`fa-brands fa-linkedin-in`}></i>
    </Link>
  )
}

export default LinkedinIcon
