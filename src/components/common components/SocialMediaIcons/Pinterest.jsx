import React from 'react'
import style from "./index.module.scss";
import PinterestIconMUI from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom';

function PinterestIcon({ to }) {
  return (
    <Link to={to} className={`${style.icon} ${style.pinterest}`}>
      <PinterestIconMUI
        color='inherit'
        fontSize='inherit'
      />
    </Link>
  )
}

export default PinterestIcon
