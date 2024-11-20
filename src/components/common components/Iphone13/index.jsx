import React from "react";
import style from "./index.module.scss";
import IPhone from "./../../../assets/img/IphoneFrame(6).png";

function Iphone13({ src }) {
  return (
    <div className={style.container}>
      <img id={style.phone} src={IPhone} alt="iPhone Frame" />
      <div className={style.iphoneCon}>
        <div className={style.facebook}>
          <iframe
            className={style.first}
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnaxcivanhemkarlar&tabs=timeline&width=264&height=570&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="264"
            height="570"
            loading="lazy"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Facebook Page"
          ></iframe>
          <iframe
            className={style.second}
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnaxcivanhemkarlar&tabs=timeline&width=228&height=496&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="228"
            height="496"
            loading="lazy"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Facebook Page"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Iphone13;
