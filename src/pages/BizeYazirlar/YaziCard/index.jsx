import React from 'react'
import style from "./index.module.scss"

function YaziCard(props) {

  const dateStr = props.tarix;
  const date = new Date(dateStr);

  // Tarixi əldə etmək
  const day = String(date.getDate()).padStart(2, "0"); // Gün
  const monthNames = [
    "yanvar", "fevral", "mart", "aprel", "may", "iyun",
    "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"
  ];
  const month = monthNames[date.getMonth()]; // Ay adı
  const year = date.getFullYear(); // İl

  // Formatlaşdırılmış nəticə
  const formattedDate = `${day} ${month} ${year}`;

  return (
    <div className={style.container}>
      <h3
        className={`${style.writer} ${props.isFirstSlide ? style.firstSlide : ""}`}
      >
        {props.baslik}
      </h3>
      <p
        className={`${style.content} ${props.isFirstSlide ? style.firstSlide : ""} ${props.truncate ? style.truncate : ""}`}
      >
        {props.mesaj}
      </p>
      <span className={`${style.date} ${props.desktopDate ? "" : style.none}`}>{formattedDate}</span>
    </div>
  )
}

export default YaziCard
