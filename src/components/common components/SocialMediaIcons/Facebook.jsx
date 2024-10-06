import React from 'react'
import style from "./index.module.scss";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Link } from 'react-router-dom';

function FacebookIcon({ to }) {
  return (
    <Link to={to} className={`${style.icon} ${style.facebook}`}>
      <FacebookRoundedIcon
        color='inherit'
        fontSize='inherit'
      />
    </Link>
  )
}

export default FacebookIcon
