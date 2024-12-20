import React from 'react'
import './index.scss'
//material ui
import MessageIcon from '@mui/icons-material/Message';
import { Link } from 'react-router-dom';
import gerb from '../../assets/img/image.png'

function Footer() {
  return (
    <div id='footer'>
      <div className="ag_rend"></div>
      {/* <div className="img">
        <img src={gerb} alt="" />
      </div> */}
      <div className="bigbox">
        <div className="head">
          <h3>BİZİMLƏ ƏLAQƏ !</h3>
          <Link to={'form'}>
            <div className="mesaj">
              <MessageIcon className='icon'></MessageIcon>
            </div>
          </Link>
        </div>
        <div className="under">
          <div>
            <ul>
              <p>HƏMKARLAR İTTİFAQLARI ŞUARASI</p>
              <li><Link to="/haqqimizda" >Haqqımızda</Link></li>
              <li><Link to="/orqanlar" >HİŞ-in orqanları</Link></li>
              <li><Link to="/struktur" >Struktur</Link></li>
              <li><Link to="/rehberlik/sedr" >Sədr</Link></li>
              <li><Link to="/rehberlik/muavinler" >Müavinlər</Link></li>
              <li><Link to="/rehberlik/katibler" >Katiblər</Link></li>
            </ul>
          </div>

          <div>
            <ul>
              <p>İCTİMAİYYƏTLƏ ƏLAQƏLƏR</p>
              <li><Link to="/xeberler" >Xəbərlər</Link></li>
              <li><Link to="/sosial_terefdasliq" >Sosial tərəfdaşlıq</Link></li>
              <li><Link to="/struktur/uzv_teskilatlar" >Üzv Təşkilatlar</Link></li>
              <li><Link to="/struktur/tabe_teskilatlar/1" >Tabelikdə olan təşkilatlar</Link></li>
              <li><Link to="/foto_xronika" >Foto Xronika</Link></li>
              <li><Link to="/bize_yazirlar" >Bizə yazırlar</Link></li>
            </ul>
          </div>

          <div>
            <ul>
              <p>FƏALİYYƏTİMİZ</p>
              <li><Link to="/emek_huquqlari" >Əmək hüquqları</Link></li>
              <li><Link to="/emeyin_tehlukesizliyi" >Əməyin təhlükəsizliyi</Link></li>
              <li><Link to="/sosial_telimatlar" >Sosial təlimatlar</Link></li>
              <li><Link to="/gencler_siyaseti" >Gənclər Siyasəti</Link></li>
              <li><Link to="/kecidler" >Keçidlər</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='en_alt'>
        <p className='copyright_text'>© Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurası</p>
        <a target='balank' href='https://rzayevkenan.com' className="rzayev_logo">
          <img src={"https://rzayevkenan.com/uploads/tweb/5.png"} />
        </a>
      </div>
    </div>

  )
}

export default Footer