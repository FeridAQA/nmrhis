import React from 'react'
import STDContent from '../Content'
import STDImage from '../Image'
import Gerb from "./../../../assets/img/NMR-HIŞ.png"
import style from "./index.module.scss"
import PDF from "./../../../TEST/PythonParallelProgramming.pdf"
import PDFBlock from './../../commonlayout/PDFBlock/index';

function STDContainer() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h2 className={style.title}>Baş kollektiv saziş, 7 fevral 2018-ci il Q Ə R A R (№ 36)</h2>
        <div className={style.content}>
          <STDContent>
            Azərbaycan Respublikasının Nazirlər Kabineti,Azərbaycan Həmkarlar İttifaqları Konfederasiyası vəAzərbaycan Respublikası Sahibkarlar (İşəgötürənlər)Təşkilatlarının Milli Konfederasiyası arasında2018-2019-cu illər üçün Baş Kollektiv Sazişin bağlanılması haqqında  Azərbaycan Respublikasının Nazirlər Kabineti, Azərbaycan Həmkarlar İttifaqları Konfederasiyası və Azərbaycan Respublikası Sahibkarlar (İşəgötürənlər) Təşkilatlarının Milli Konfederasiyası QƏRARA ALIRLAR: Azərbaycan Respublikasının Əmək Məcəlləsinin 36-cı maddəsinə uyğun olaraq Azərbaycan Respublikasının Nazirlər Kabineti, Azərbaycan Həmkarlar İttifaqları Konfederasiyası və Azərbaycan Respublikası Sahibkarlar (İşəgötürənlər) Təşkilatlarının Milli Konfederasiyası arasında 2018-2019-cu illər üçün Baş Kollektiv Saziş bağlanılsın (əlavə olunur).  Artur Rasi-zadə Azərbaycan Respublikasının Baş naziri  Səttar Möhbalıyev Azərbaycan Həmkarlar İttifaqları Konfederasiyasının sədri  Məmməd Musayev Azərbaycan Respublikası Sahibkarlar (İşəgötürənlər) Təşkilatları Milli Konfederasiyasının prezidenti
          </STDContent>
          <STDImage
            image={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}
            date={"21 yanvar 2024"}
          />
        </div>
      </div>
      <PDFBlock src={PDF} />
      <img className={`Gerb`} id={"top"} src={Gerb} />
      <img className={"Gerb"} id={'bottom'} src={Gerb} />
    </div>
  )
}

export default STDContainer
