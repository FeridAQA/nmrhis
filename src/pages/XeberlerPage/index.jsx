import React, { useEffect, useState } from 'react';
import style from "./index.module.scss";
import Gerb from "./../../assets/img/NMR-HIŞ.png";
import XeberCard from '../../components/home components/XeberCard';
import axios from 'axios';
import { baseURL } from '../../confiq';
import { Helmet } from 'react-helmet-async';

function XeberlerPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function fetchData(currentPage) {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}news?page=${currentPage}`);
      const news = response.data;

      if (news.length === 0) {
        setHasMore(false); // No more data
      } else {
        setData((prevData) => [...prevData, ...news]);
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
      document.documentElement.offsetHeight - (window.innerHeight / 2 * 3) // Threshold of 200px
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
    <div className={style.XeberlerPage}>
      <Helmet>
        <title>Xəbərlər</title>
      </Helmet>
      <div className={style.titleBox}>
        <h1 className={style.title}>XƏBƏRLƏR</h1>
        <div className={style.line}></div>
      </div>

      <div className={style.content}>
        {data.map((item, i) => (
          <XeberCard
            key={i}
            id={item.id}
            title={item.baslik || "Default Title"} // Adjust based on actual API response structure
            description={item.tarix || "No description available"}
            image={item.baslik_foto_url || "https://via.placeholder.com/150"} // Default image if no image provided
          />
        ))}
      </div>

      {
        loading &&
        <div className='CC'>
          <span className="loaderText"></span>
        </div>
      }

      <img className={"Gerb"} id={"bottom"} src={Gerb} alt="Gerb" />
    </div>
  );
}

export default XeberlerPage;
