import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/common components/PageTitle";
import { baseURL } from "../../confiq";
import { FormatDate } from "../../funcs/tarix";
import SonXeberler from "../../layout/commonlayout/SonXeberler";
import Gerb from "./../../assets/img/NMR-HIŞ.png";
import ContentBox from "./Content";
import ImageBox from "./Image";
import style from "./index.module.scss";
import CategoriesData from "../../Data/CategoriesData";
import YTBlock from "../../layout/commonlayout/YTBlock";
import PDFBlock from "../../layout/commonlayout/PDFBlock";

function XeberDetailPage() {
  const { id } = useParams();

  const [Data, setData] = useState([]);
  const [Images, setImages] = useState([]);
  const [Categories, setCategories] = useState([]);

  async function GetData() {
    try {
      const response = await axios.get(baseURL.concat(`news/${id}`));
      const data = response.data[0];

      setData(data);
      setImages(data.images.split(","));
      // Trim spaces from categories
      setCategories(data.kategoriya.split(",").map((cat) => cat.trim()));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetData();
  }, [id]);

  return (
    <>
      <div className={style.container}>
        <PageTitle>
          {CategoriesData &&
            CategoriesData.filter((item) => Categories.includes(item.code))
              .map((item, i, arr) => (
                <Fragment key={i}>
                  {item.name}
                  {i < arr.length - 1 && ", "}
                </Fragment>
              ))}
        </PageTitle>
        <div className={style.xeberBox}>
          <ImageBox images={Images} date={FormatDate(Data.tarix)}>
            {Data.baslik}
          </ImageBox>
          <ContentBox date={FormatDate(Data.tarix)}>{Data.mesaj}</ContentBox>
        </div>
        {Data && Data.pdf ? <YTBlock src={"https://www.youtube.com/embed/Cdxtz-fwNzw"} /> : ""}
        {Data && Data.pdf ? <PDFBlock src={Data && Data.pdf} /> : ""}
        <hr className={`line`} />
        <SonXeberler />
        <img className={"Gerb"} id={"bottom"} src={Gerb} />
        <img className={"Gerb"} id={"top"} src={Gerb} />
      </div>
    </>
  );
}

export default XeberDetailPage;
