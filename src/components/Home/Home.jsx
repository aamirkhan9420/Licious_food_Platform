import React from 'react'
import BestSeller from '../BestSeller/BestSeller'
import BreakfastSnacking from '../BreakfastSnacking/BreakfastSnacking'
import Category from '../categories/Category'

import ControlledCarousel from './Carousel'
import style from "./Home.module.css"
export default function Home({ handleQuantityIncreament, handleQuantityDecreament, handlePost }) {

  return (
    <div className={style.home_container}>

      <ControlledCarousel />

      <Category />

      <BestSeller handleQuantityDecreament={handleQuantityDecreament} handleQuantityIncreament={handleQuantityIncreament} handlePost={handlePost} />
      <BreakfastSnacking handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament} handlePost={handlePost} />
      <div className={style.big_bottom_img_div}>
        <img src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db" alt="" />
      </div>
    </div>
  )
}
