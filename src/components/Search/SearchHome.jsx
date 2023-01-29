import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Category from '../categories/Category'
import { getsearchData } from '../../redux/AppReducer/action'
import style from "./SearchHome.module.css"
export default function SearchHome({ text, handleQuantityIncreament, handleQuantityDecreament, handlePost }) {
  let dispatch = useDispatch()
  let [filterd, setFilterd] = useState([])
  let foodData = useSelector((state) => {
    return state.AppReducer.foodData
  })
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
  let handlesearch = () => {
    let newValue = []
    if (text) {
      if (text.length > 2) {
        foodData.map((el, index) => {
          if (el.name.toLowerCase().includes(text)) {
            newValue.push(el)
          }
          else {
            newValue.splice(index, 1)
          }
        })
      }

    }
    setFilterd(newValue)
  }

  useEffect(() => {
    getsearchData(dispatch)
    handlesearch()
  }, [dispatch, text])
  console.log(filterd)

  return (
    <div className={style.searchHome_container}>
      {text && <div className={style.search_heading}>
        <h1>Search Results</h1>
        <h3>Freshest meats just for you</h3>
      </div>}

      {text && <div className={style.searh_parent}>
        {
          filterd && filterd.map((el, index) => (

            <div className={style.search_single_div} key={index}>
              <Link to={"/SinglePage"} state={el} className={style.single_img_div}>
                {/* <div className={style.single_img_div}> */}
                <img src={el.imgUrl} alt="" />
                {/* </div> */}
              </Link>
              <div className={style.single_prod_parent}>

                <h2>{el.name}</h2>
                <div className={style.price_btn_container}>
                  <Link to={"/SinglePage"} state={el} className={style.price_waight}>

                    {/* <div > */}
                    <h3>{el.gross}{el.unit}|</h3>
                    <h3>{el.cuurency}{el.price} <span className={style.cutprice}>{el.cuurency}{el.strikedPrice}</span></h3>
                    {/* </div> */}
                  </Link>

                  {/* <div className={style.btnadd_tocart}>  <button>ADD TO CART</button> */}

                  {cartData.length > 0 && cartData.find(({ id }) => id === el.id) !== undefined ?
                    <div className={style.add_remove_btn_div}><button onClick={() => handleQuantityDecreament(el.id)}>-</button><h1>{checkQuantity(el)}</h1><button onClick={() => handleQuantityIncreament(el.id)}>+</button></div>
                    : <div className={style.btnadd_tocart}><button onClick={() => handlePost(el)}>ADD TO CART</button></div>}

                </div>
              </div>
            </div>
          ))
        }
      </div>}
      {!text && <Category filterd={filterd} />}


    </div>
  )
}

