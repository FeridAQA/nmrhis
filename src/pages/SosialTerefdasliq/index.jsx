import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardHolder from '../../components/common components/FealiyyetimizCardHolder';
import PageTitle from '../../components/common components/PageTitle';
import { baseURL } from '../../confiq';
import Gerb from "./../../assets/img/NMR-HIŞ.png"

function SosialTerefdasliq() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function fetchData(currentPage) {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}news?category=1&page=${currentPage}`);
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
      <PageTitle>Sosial Tərəfdaşlıq</PageTitle>
      <CardHolder data={data} path={"sosial_terefdasliq"} />

      {
        loading &&
        <div className='CC'>
          <span className="loaderText"></span>
        </div>
      }
    </>
  )
}

export default SosialTerefdasliq
