import React, { Fragment } from 'react'
import style from "./index.module.scss"
import { NavLink } from 'react-router-dom'

function PageTabs({ title, tabs }) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <hr />
      <div className={style.tabs}>
        {tabs && tabs.map((tab, i) => (
          <Fragment key={i}>
            <NavLink to={tab.path} className={style.tab_link}>{tab.title}</NavLink>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default PageTabs
