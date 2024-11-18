import React, { useEffect, useState } from 'react'
import CardHolder from '../../../components/common components/FealiyyetimizCardHolder'
import axios from 'axios';
import { baseURL } from '../../../confiq';
import Gerb from "./../../../assets/img/NMR-HIŞ.png"

function EmekHuquqlari() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function fetchData(currentPage) {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}news?category=2&page=${currentPage}`);
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
    <>
      <div>
        <CardHolder data={data} path={"emek_huquqlari"} />
      </div>

      {
        loading &&
        <div className='CC'>
          <span className="loaderText"></span>
        </div>
      }
      <img className={"Gerb"} id={"bottom"} src={Gerb} alt="Gerb" />
    </>
  )
}

export default EmekHuquqlari
