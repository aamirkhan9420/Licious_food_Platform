import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartGet, getRequestData } from '../../redux/AppReducer/action'
import style from "./Parent.module.css"
export default function Parent({ props }) {
    let { handleQuantityIncreament, handleQuantityDecreament, handlePost, food, fill1, fill2, fill3, src1, src2, src3, src4 } = props
    let foodData = useSelector((state) => {
        return state.AppReducer.foodData
    })
    let isLoading = useSelector((state) => {
        return state.AppReducer.isLoading
    })
    let cartData = useSelector((state) => {
        return state.AppReducer.cartData
    })
    // *filter filter start filter start filter start  filter  filter*//
    let [filterd, setFilterd] = useState(foodData || [])

    let filterAll = () => {
        console.log("hello1")

        setFilterd(foodData)

    }

    let filterByFreshWater = () => {
        console.log("hello1")
        let arr = []
        let filterData = foodData.filter((el) => {
            if ((el.name.includes(fill1))) {
                arr.push(el)
            }
        })
        setFilterd(arr)

    }
    let filterBySea = () => {
        console.log("hello2")
        let arr = []
        let filterData = foodData.filter((el) => {
            if ((el.des.includes(fill2))) {
                arr.push(el)
            }
        })
        setFilterd(arr)
    }
    let filterByReadyCook = () => {
        console.log("hello3")
        let arr = []
        let filterData = foodData.filter((el) => {
            if ((el.name.includes(fill3))) {
                arr.push(el)
            }
        })
        setFilterd(arr)
    }
    /*Filter end  filter end filter end filter end filter end fiter end*/

    console.log(cartData)
    let dispatch = useDispatch()
    const handleGetCart = () => {
        cartGet(dispatch)

    }
    let checkQuantity = (el) => {
        let ans = cartData.length > 0 && cartData.map((item) => {


            if (item.id === el.id) {

                return item.quantity
            }
        })
        return ans
    }
    let fishFunction = () => {
        getRequestData(dispatch, food)
        handleGetCart()
    }


    useEffect(() => {
        handleGetCart()
        fishFunction()
        setFilterd(foodData)
    }, [dispatch, cartGet, foodData.length])

    return (
        <div className={style.fish_container}>
            <div className={style.fish_filter_nav}>
                <div className={style.fish_filter_nav_parent}>
                    <div onClick={() => filterAll()}><img src={src1} alt="" /><h3>All</h3></div>
                    <div onClick={() => filterByFreshWater()}><img src={src2} alt="" /><h3>{fill1}</h3></div>
                    <div onClick={() => filterBySea()}><img src={src3} alt="" /><h3>{fill2}</h3></div>
                    <div onClick={() => filterByReadyCook()}><img src={src4} alt="" /><h3>{fill3}</h3></div>
                </div>
            </div>

            <div className={style.fish_main_parent}>
                <div className={style.fish_parent_grid_div}>
                    {foodData.length > 0 && filterd.map((el) => (

                        <div key={el.index} className={style.single_div}>
                            <Link to={"/SinglePage"} state={el} className={style.link}>
                                <img src={el.imgUrl} alt="fish" />
                            </Link>

                            <div className={style.prod_detail}>


                                <h2>{el.name}</h2>
                                <p>{el.des}</p>
                                <h2>{el.gross}{el.unit}</h2>


                                <div className={style.prod_price_btn_div}>
                                    <Link to={"/SinglePage"} state={el} className={style.link}>

                                        <h1>{el.price_tag}{el.cuurency}{el.price}</h1>
                                    </Link>

                                    {cartData.length > 0 && cartData.find(({ id }) => id === el.id) !== undefined ?
                                        <div className={style.add_remove_btn_div}><button onClick={() => handleQuantityDecreament(el.id)}>-</button><h1>{checkQuantity(el)}</h1><button onClick={() => handleQuantityIncreament(el.id)}>+</button></div>
                                        : <button onClick={() => handlePost(el)}  >ADD TO CART</button>}
                                </div>

                            </div>
                        </div>

                    ))


                    }
                </div>
            </div>


        </div>
    )
}
