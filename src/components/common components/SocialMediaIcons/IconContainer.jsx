import React from 'react'
import style from "./index.module.scss";
import FacebookIcon from './Facebook';
import TwitterIcon from './Twitter';
import PinterestIcon from './Pinterest';
import TelegramIcon from './Telegram';
import WhatsappIcon from './Whatsapp';
import LinkedinIcon from './LinkedIn';
import MailIcon from './Mail';

function IconContainer() {
  return (
    <div className={style.container}>
      <FacebookIcon />
      <TwitterIcon />
      <PinterestIcon />
      <TelegramIcon />
      <WhatsappIcon />
      <LinkedinIcon />
      <MailIcon />
    </div>
  )
}

export default IconContainer
