import React, { useEffect, useState } from 'react';
import style from "./index.module.scss";
import Gerb from "./../../assets/img/NMR-HIŞ.png";
import XeberCard from '../../components/home components/XeberCard';
import axios from 'axios';
import { baseURL } from '../../confiq';

function XeberlerPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function fetchData(currentPage) {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}news?page=${currentPage}&count=8`);
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
      document.documentElement.offsetHeight - 400 // Threshold of 400px
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

      {loading && <p>Loading more...</p>}
      {!hasMore && <p>No more news available.</p>}

      <img className={style.Gerb} id={"bottom"} src={Gerb} alt="Gerb" />
    </div>
  );
}

export default XeberlerPage;
