import "./BreakfastSnacking.css"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getDataBreakFast } from "../../redux/AppReducer/action"

import SwiperFunc from "../Swiper/Swiper"
export default function BreakfastSnacking({handleQuantityIncreament,handleQuantityDecreament,handlePost}) {
  
  let dispatch=useDispatch()
  let breakFastData=useSelector((state)=>{
    return state.AppReducer.breakFastData
  })
  console.log(breakFastData)
  let calldata=()=>{
    getDataBreakFast(dispatch)
 
  }
  useEffect(()=>{
    calldata()
    
  },[dispatch])
  return (
    <div className="BestSeller_container">
         <div className="bestseller_heading">
            <h1>Breakfast &amp; Snacking Specials</h1>
       
        </div>
        <SwiperFunc foodData={breakFastData} handleQuantityIncreament={handleQuantityIncreament}handleQuantityDecreament={handleQuantityDecreament}handlePost={handlePost} />

    </div>
  )
}
