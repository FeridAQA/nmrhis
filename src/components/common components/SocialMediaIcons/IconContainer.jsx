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
      <FacebookIcon to={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnmrhis.az%2Fxeber%2F268"} />
      <TwitterIcon to={"https://x.com/intent/post?url=https%3A%2F%2Fnmrhis.az%2Fxeber%2F268%23&text=Nax%C3%A7%C4%B1van+Muxtar+Respublikas%C4%B1+H%C9%99mkarlar+%C4%B0ttifaqlar%C4%B1+%C5%9Euras%C4%B1%3A"} />
      <PinterestIcon to={"https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fnmrhis.az%2Fxeber%2F268%23&description=Nax%C3%A7%C4%B1van%20Muxtar%20Respublikas%C4%B1%20H%C9%99mkarlar%20%C4%B0ttifaqlar%C4%B1%20%C5%9Euras%C4%B1:"} />
      <TelegramIcon to={"https://t.me/share/url?url=https%3A%2F%2Fnmrhis.az%2Fxeber%2F268%23"} />
      <WhatsappIcon to={"https://api.whatsapp.com/send?text=Nax%C3%A7%C4%B1van%20Muxtar%20Respublikas%C4%B1%20H%C9%99mkarlar%20%C4%B0ttifaqlar%C4%B1%20%C5%9Euras%C4%B1%3A%20https%3A%2F%2Fnmrhis.az%2Fxeber%2F268%23"} />
      <LinkedinIcon to={"https://www.linkedin.com/shareArticle/?url=https%3A%2F%2Fnmrhis.az%2Fxeber%2F268%23"} />
      <MailIcon to={"mailto:rahimlix2000@gmail.com"} />
    </div>
  )
}

export default IconContainer
