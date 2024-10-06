import React from 'react'
import style from "./index.module.scss";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

function WhatsappIcon({ to }) {
  return (
    <Link to={to} className={`${style.icon} ${style.whatsapp}`}>
      <WhatsAppIcon
        color='inherit'
        fontSize='inherit'
      />
    </Link>
  )
}

export default WhatsappIcon
