import React from 'react';
import style from "./index.module.scss"
import Gerb from "./../../assets/img/NMR-HIŞ.png"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ServerErrorPage = () => {
  return (
    <div className={style.container}>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <h1 className={style.title}>Error</h1>
      <p className={style.message}>
        Belə bir səhifə yoxdur. <Link to={"/"}>Ana Səhifəyə geri qayıdın.</Link>
      </p>
      <img className={"Gerb"} id={"top"} src={Gerb} />
      <img className={"Gerb"} id={"bottom"} src={Gerb} />
    </div>
  );
};

export default ServerErrorPage;
