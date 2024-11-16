import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import FotoXronikaCard from "../../components/common components/FotoXronikaCard";
import PageTitle from "../../components/common components/PageTitle";
import axios from "axios";
import { baseURL } from "../../confiq";

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
    <>
      <div className={style.titleBox}>
        <PageTitle>Foto Xronika</PageTitle>
      </div>
      <div className={style.container}>
        {data.map((item, i) => (
          <FotoXronikaCard key={i} date={item.date} image={item.name} />
        ))}
      </div>
      {loading && <p>Loading more...</p>}
      {!hasMore && <p>No more data available.</p>}
    </>
  );
}

export default FotoXronikaPage;
