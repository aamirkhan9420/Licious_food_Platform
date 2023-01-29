import { Spinner } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/AppReducer/action'
import SwiperFunc from '../Swiper/Swiper'

import Storage from '../storage/Storage'
import "./BestSeller.css"
export default function BestSeller({handleQuantityIncreament,handleQuantityDecreament,handlePost}) {
  
  let dispatch=useDispatch()
  let foodData=useSelector((state)=>{
    return state.AppReducer.foodData
  })
  let isLoading=useSelector((state)=>{
    return state.AppReducer.isLoading
  })
  let calldata=()=>{
    getData(dispatch)
 
  }
  useEffect(()=>{
    calldata()
    
  },[dispatch])
  if(isLoading){
    return<Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
    position={"fixed"}
    left={"50%"}
    right={"50%"}
    top={"50%"}
    bottom={"50%"}  
    zIndex="1"

  />
 }
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
