import React from 'react';
import style from "./index.module.scss";
import { Link } from 'react-router-dom';

function AccessCard({img, title, path}) {
  return (
    <>
      <Link to={path} className={style.AccessCard}>
        <img alt='Icon' src={img} />
        <span className={style.title}>{title}</span>
      </Link>
    </>
  )
}

export default AccessCard
