import React from 'react'
import style from "./index.module.scss";
import AccessCard from '../../../components/home components/AccessCard';
import Orqanlar from "../../../assets/img/QuickAccessPanel/Orqanlar(Figma).png";
import Kecidler from "../../../assets/img/QuickAccessPanel/Keçidlər.png";
import Pensiya from "../../../assets/img/QuickAccessPanel/Pensiya.png";
import Tabecilik from "../../../assets/img/QuickAccessPanel/Tabeçilik.png";
import UzvTeskilatlar from "../../../assets/img/QuickAccessPanel/ÜzvTəşkilatlar.png";
import Qanunvericilik from "../../../assets/img/QuickAccessPanel/Qanunvaricilik.png";

function QuickAccessPanel() {
  return (
    <>
      <div className={style.container}>
        <AccessCard path={"/orqanlar"} title={"Orqanlar"} img={Orqanlar} />
        <AccessCard path={"/struktur/uzv_teskilatlar"} title={"ÜzvTəşkilatlar"} img={UzvTeskilatlar} />
        <AccessCard path={"/struktur/tabe_teskilatlar/1"} title={"Tabeçilik"} img={Tabecilik} />
        <AccessCard path={"/qanunvericilik"} title={"Qanunvericilik"} img={Qanunvericilik} />
        <AccessCard path={"https://e-sosial.az/#/eServiceFrame/5721"} title={"Pensiya"} img={Pensiya} />
        <AccessCard path={"/kecidler"} title={"Keçidlər"} img={Kecidler} />
      </div>
    </>
  )
}

export default QuickAccessPanel
