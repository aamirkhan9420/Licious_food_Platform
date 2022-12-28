import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/AppReducer/action'
import SwiperFunc from '../../Swiper/Swiper'

import Storage from '../storage/Storage'
import "./BestSeller.css"
export default function BestSeller({handleQuantityIncreament,handleQuantityDecreament,handlePost}) {
  
  let dispatch=useDispatch()
  let foodData=useSelector((state)=>{
    return state.AppReducer.foodData
  })
  console.log(foodData)
  let calldata=()=>{
    getData(dispatch)
 
  }
  useEffect(()=>{
    calldata()
    
  },[dispatch])
  return (
    <div className="BestSeller_container">
         <div className="bestseller_heading">
            <h1>Best Sellers</h1>
       
        </div>
        {/* <Storage /> */}
        <SwiperFunc foodData={foodData} handleQuantityIncreament={handleQuantityIncreament}handleQuantityDecreament={handleQuantityDecreament}handlePost={handlePost} />
    </div>
  )
}
