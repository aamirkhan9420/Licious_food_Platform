import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartGet, getRequestData } from '../redux/AppReducer/action'



import style from './Spread.module.css'
export default function Spread({ handleQuantityIncreament, handleQuantityDecreament, handlePost }) {
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

    let filterByChicken = () => {
        console.log("hello1")
        let arr = []
        let filterData = foodData.filter((el) => {
            if ((el.name.includes("Chicken"))) {
                arr.push(el)
            }
        })
        setFilterd(arr)

    }
    let filterByEgg = () => {
        console.log("hello2")
        let arr = []
        let filterData = foodData.filter((el) => {
            if ((el.name.includes("Egg"))) {
                arr.push(el)
            }
        })
        setFilterd(arr)
    }
    let filterByCombo = () => {
        console.log("hello3")
        let arr = []
        let filterData = foodData.filter((el) => {
            if ((el.des.includes("combo"))) {
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
        getRequestData(dispatch, "sauce")
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
                    <div onClick={() => filterAll()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/465efa7b-69c5-9a07-e7ff-3b05a05f59c9/original/Spread_Bottle1.png" alt="" /><h3>All</h3></div>
                    <div onClick={() => filterByChicken()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/547764cb-2801-013b-9624-eebe25d9635b/original/chicken.png" alt="" /><h3>Chicken</h3></div>
                    <div onClick={() => filterByEgg()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/95cc9fb8-eeca-1034-686e-d64c366c936f/original/egg.png" alt="" /><h3>Egg</h3></div>
                    <div onClick={() => filterByCombo()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/93cf2977-8162-5553-a488-c0c312d67b58/original/Combo.png" alt="" /><h3>Combos</h3></div>
                </div>
            </div>

            <div className={style.fish_main_parent}>
                <div className={style.fish_parent_grid_div}>
                    {foodData.length > 0 && filterd.map((el) => (
                        <div key={el.index} className={style.single_div}>
                            <Link to={"/SinglePage"} state={el} className={style.link}>

                                <img src={el.imgUrl} alt="spread" />
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


        </div >
    )
}
