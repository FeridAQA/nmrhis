import React from 'react'
import style from "./index.module.scss"

function About() {
  return (
    <div>
      <div className={style.facebook}>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPresidentIlhamAliyev%3Flocale%3Daz_AZ&tabs=timeline&width=340&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="900"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook Page"
        ></iframe>
      </div>
    </div>
  )
}

export default About