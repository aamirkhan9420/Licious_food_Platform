import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import style from "./SinglePage.module.css"
export default function SinglePage({handleQuantityIncreament, handleQuantityDecreament, handlePost }) {
   let [productData, setData] = useState()
   let location = useLocation()
   console.log(location.state)
   let cartData = useSelector((state) => {
      return state.AppReducer.cartData
  })
   let checkQuantity = (el) => {
      let ans = cartData.length > 0 && cartData.map((item) => {


          if (item.id === el.id) {

              return item.quantity
          }
      })
      return ans
  }
   useEffect(() => {
      setData(location.state)
   }, [])
   if (productData)
      return (
         <div className={style.singlepage_container}>
            <div className={style.singlepage_parent}>

               <div className={style.singlepage_img_div}>
                  <img src={productData.imgUrl} alt="" />

               </div>
               <div className={style.singlepage_details_div}>
                  <div className={style.singlepage_heading}>
                     <h1>{productData.name}</h1>
                  </div>

                  <div className={style.singlepage_des}>
                     <p>{productData.des}{productData.name}{productData.des}{productData.name}</p>
                     <h3>Disclaimer: Best Before 30 Days from the date of manufacture.</h3>

                  </div>
                  <div className={style.singlepage_pieces_parent}>
                     <div>
                        <h3>No.of Pieces</h3>
                        <h3>server</h3>

                     </div>
                     <div>
                        <img src="https://d2407na1z3fc0t.cloudfront.net/Banner/Relish.png" alt="" />
                        <h3>1</h3>
                     </div>
                  </div>
                  <div className={style.singlepage_price_addbtn_div}>
                     <h1>{productData.cuurency}{productData.price}</h1>
                     <h3>{productData.price_tag}<span className={style.cutprice}>{productData.cuurency} {productData.strikePrice}</span></h3>
                     <h2>{productData.off}{productData.off_tag}</h2>
                      {cartData.length > 0 && cartData.find(({ id }) => id === productData.id) !== undefined ?
                        <div className={style.add_remove_btn_div}><button onClick={() => handleQuantityDecreament(productData.id)}>-</button><h1>{checkQuantity(productData)}</h1><button onClick={() => handleQuantityIncreament(productData.id)}>+</button></div>
                        : <button className={style.mainbtn} onClick={() => handlePost(productData)}>ADD TO CART</button>}
                  </div>
               </div>
            </div>

         </div>
      )
}
