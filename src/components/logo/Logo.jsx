import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Logo.module.css"

export default function Logo() {
  return (
    <div className={style.logo_container}>
       
        <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="logo" />
     
    </div>
  )
}
