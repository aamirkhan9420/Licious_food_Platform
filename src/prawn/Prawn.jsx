import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartGet, getRequestData } from '../redux/AppReducer/action'




import style from './Prawn.module.css'
export default function Prawn({ handleQuantityIncreament, handleQuantityDecreament, handlePost }) {
    let foodData = useSelector((state) => {
        return state.AppReducer.foodData
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

    let filterBySmall = () => {
        console.log("hello1")
        let arr = []
        let filterData = foodData.filter((el) => {
            if ((el.name.includes("Small"))) {
                arr.push(el)
            }
        })
        setFilterd(arr)

    }
    let filterByMedium = () => {
        console.log("hello2")
        let arr = []
        let filterData = foodData.filter((el) => {
            if ((el.name.includes("Medium"))) {
                arr.push(el)
            }
        })
        setFilterd(arr)
    }
    let filterByReadyCook = () => {
        console.log("hello3")
        let arr = []
        let filterData = foodData.filter((el) => {
            if ((el.name.includes("Ready"))) {
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
        getRequestData(dispatch, "Prawn")
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
                    <div onClick={() => filterAll()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0648f953-0d66-e58d-d0c0-74611b65c576/original/Prawn.png" alt="" /><h3>All</h3></div>
                    <div onClick={() => filterBySmall()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/adc7342a-6136-0853-407e-7cd2a81fee8e/original/Smallest.png" alt="" /><h3>Small Size</h3></div>
                    <div onClick={() => filterByMedium()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c84378f-b90a-3860-d490-6397dbd1f0c2/original/mideum.png" alt="" /><h3>Medium Size</h3></div>
                    <div onClick={() => filterByReadyCook()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c17b68d2-aa90-d266-04fe-f63bea8ae982/original/AMritsari.png" alt="" /><h3>Ready to Cook</h3></div>
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
                                <Link to={"/SinglePage"} state={el} className={style.link}>

                                    <h2>{el.name}</h2>
                                    <p>{el.des}</p>
                                    <h2>{el.gross}{el.unit}</h2>
                                </Link>

                                <div className={style.prod_price_btn_div}>
                                    <Link to={"/SinglePage"} state={el} className={style.link}>

                                        <h1>{el.price_tag}{el.cuurency}{el.price}</h1>
                                    </Link>

                                    {cartData.length > 0 && cartData.find(({ id }) => id === el.id) !== undefined ?
                                        <div className={style.add_remove_btn_div}><button onClick={() => handleQuantityDecreament(el.id)}>-</button><h1>{checkQuantity(el)}</h1><button onClick={() => handleQuantityIncreament(el.id)}>+</button></div>
                                        : <button onClick={() => handlePost(el)}>ADD TO CART</button>}
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
