import React from 'react'
import style from "./index.module.scss"
import FotoXronikaCard from '../../components/common components/FotoXronikaCard'
import PageTitle from '../../components/common components/PageTitle'

const Fotos = [
  {
    image: "https://cdn.pixabay.com/photo/2023/05/24/21/26/car-8015901_1280.jpg",
    date: "26.07.2024, 17:11:07",
  },
  {
    image: "https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/app/thread/20231112/4318020878898572541/1462181600090390537/1462181600090390537.jpeg",
    date: "26.07.2024, 17:11:07",
  },
  {
    image: "https://cdn.pixabay.com/photo/2023/05/24/21/26/car-8015901_1280.jpg",
    date: "26.07.2024, 17:11:07",
  },
  {
    image: "https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/app/thread/20231112/4318020878898572541/1462181600090390537/1462181600090390537.jpeg",
    date: "26.07.2024, 17:11:07",
  },
  {
    image: "https://cdn.pixabay.com/photo/2023/05/24/21/26/car-8015901_1280.jpg",
    date: "26.07.2024, 17:11:07",
  },
  {
    image: "https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/app/thread/20231112/4318020878898572541/1462181600090390537/1462181600090390537.jpeg",
    date: "26.07.2024, 17:11:07",
  },
  {
    image: "https://cdn.pixabay.com/photo/2023/05/24/21/26/car-8015901_1280.jpg",
    date: "26.07.2024, 17:11:07",
  },
]

function FotoXronikaPage() {

  // Get All Photos From Backend

  return (
    <>
      <div className={style.titleBox}>
        <PageTitle>Foto Xronika</PageTitle>
      </div>
      <div className={style.container}>
        {Fotos && Fotos.map((item, i) => (
          <FotoXronikaCard
            key={i}
            date={item.date}
            image={item.image}
          />
        ))}
      </div>
    </>
  )
}

export default FotoXronikaPage
