import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartDelete, cartGet, cartPatch, cartPatchQuantiy, cartPost, getRequestData } from '../../redux/AppReducer/action'
import style from "./Fish.module.css"
export default function Fish({ handleQuantityIncreament, handleQuantityDecreament, handlePost }) {

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
     let [filterd,setFilterd]=useState(foodData||[])

    let filterAll = () => {
        console.log("hello1")

        setFilterd(foodData)

    }

    let filterByFreshWater = () => {
        console.log("hello1")
        let arr = []
        let filterData = foodData.filter((el) => {
            if ((el.name.includes("Fresh"))) {
                arr.push(el)
            }
        })
        setFilterd(arr)

    }
    let filterBySea = () => {
        console.log("hello2")
        let arr = []
        let filterData = foodData.filter((el) => {
            if ((el.des.includes("Se"))) {
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
        getRequestData(dispatch, "fish")
        handleGetCart()
    }


    useEffect(() => {
        handleGetCart()
        fishFunction()
        setFilterd(foodData)
    }, [dispatch, cartGet,foodData.length])
   
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
        <div className={style.fish_container}>
            <div className={style.fish_filter_nav}>
            <div className={style.fish_filter_nav_parent}>
                <div onClick={()=>filterAll()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3e466619-abc2-c017-5140-788c2c90719b/original/FIsh.png" alt="" /><h3>All</h3></div>
                <div onClick={()=>filterByFreshWater()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9d1aa6e6-2f69-131a-9938-77231e7c0c2a/original/Fresh-water.png" alt="" /><h3>Freshwater</h3></div>
                <div onClick={()=>filterBySea()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/845dab73-6bc9-84a5-df80-057378225fd5/original/seawater.png" alt="" /><h3>Seawater</h3></div>
                <div onClick={()=>filterByReadyCook()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c17b68d2-aa90-d266-04fe-f63bea8ae982/original/AMritsari.png" alt="" /><h3>Ready to Cook</h3></div>
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
