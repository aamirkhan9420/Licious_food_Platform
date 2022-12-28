import React from 'react'
import { Link } from 'react-router-dom'
import style from "./PageNotFound.module.css"
export default function PageNotFound() {
  return (
    <div className={style.PageNotFound_container}>
      <div className={style.PageNotFound_parent}>
         <img src="https://www.licious.in/img/rebranding/404.png" alt="" />
            <div>Oops! The page you're looking for <br />has been cracked open. <br /><h1>Retrun to our <Link className={style.backtoHome} to={"/"}>homepage</Link></h1></div>
               
      </div>
    </div>
  )
}
