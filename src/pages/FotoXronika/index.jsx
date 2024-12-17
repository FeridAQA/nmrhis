import axios from "axios";
import React, { useEffect, useState } from "react";
import FotoXronikaCard from "../../components/common components/FotoXronikaCard";
import PageTitle from "../../components/common components/PageTitle";
import { baseURL } from "../../confiq";
import { FullDate } from "../../funcs/tarix";
import Gerb from "./../../assets/img/NMR-HIŞ.png";
import style from "./index.module.scss";
import { Helmet } from "react-helmet-async";

function FotoXronikaPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function fetchData(currentPage) {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}photos?page=${currentPage}`);
      const images = response.data.images;

      if (images.length === 0) {
        setHasMore(false); // No more data
      } else {
        setData((prevData) => [...prevData, ...images]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - (window.innerHeight / 2 * 3) // Threshold of 400px
    ) {
      if (!loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <>
      <div className={style.titleBox}>
        <Helmet>
          <title>Foto Xronika</title>
        </Helmet>
        <PageTitle>Foto Xronika</PageTitle>
      </div>
      <div className={style.container}>
        {data.map((item, i) => (
          <FotoXronikaCard key={i} date={FullDate(item.date)} image={item.name} />
        ))}
      </div>
      {
        loading &&
        <div className='CC'>
          <span className="loaderText"></span>
        </div>
      }
      {/* {!hasMore &&
        <div className='CC'>
          <p className='resultText'>Daha xəbər yoxdur.</p>
        </div>
      } */}
    </>
  );
}

export default FotoXronikaPage;
