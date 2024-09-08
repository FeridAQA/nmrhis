import style from "./index.module.scss"
import { NavLink } from 'react-router-dom'

function Dropdown({iconClass, title, path}) {
  return (
    <>
      <NavLink to={path} className={style.NavLink}>{title}</NavLink>
      <i className={`${iconClass} ${style.dropdown}`}></i>
    </>
  )
}

export default Dropdown
