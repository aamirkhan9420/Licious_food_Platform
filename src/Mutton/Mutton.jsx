import { Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartGet, getRequestData } from '../redux/AppReducer/action'


import style from './Mutton.module.css'
export default function Mutton({handleQuantityIncreament,handleQuantityDecreament,handlePost}) {
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

    let filterByCurryCut=()=>{
        console.log("hello")
        let arr=[]
        let filterData =foodData.filter((el)=>{
            if ((el.name.includes("Curry Cut"))){
                arr.push(el)
            }
        })
        setFilterd(arr)

    }
    let filterByBoneless=()=>{
        console.log("hello2")
        let arr=[]
        let filterData =foodData.filter((el)=>{
            if ((el.des.includes("boneless"))){
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
    let checkQuantity=(el)=>{
        let ans= cartData.length>0&&cartData.map((item)=>{
           
 
             if(item.id===el.id){
                
                return item.quantity
             }
         })
         return ans
     }
     let fishFunction = () => {
         getRequestData(dispatch, "Mutton_Data")
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
                <div onClick={()=>filterAll()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c28b264a-ee5e-1661-2715-97c9bbfba1f3/original/Mu.png" alt="" /><h3>All</h3></div>
                <div onClick={()=>filterByCurryCut()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/26089646-133c-648e-21ac-3f01ddb8b30b/original/Curry-Cut.png" alt="" /><h3>Curry Cuts</h3></div>
                <div onClick={()=>filterByBoneless()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cf919d27-7d51-337b-0324-2cfb79bbf09f/original/Boaneless_mince.png" alt="" /><h3>Boaneless & Mince</h3></div>
                <div onClick={()=>filterByReadyCook()}><img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/935c4a62-1dfb-8697-8231-7123663f4d28/original/Galowti_kebab.png" alt="" /><h3>Ready to Cook</h3></div>
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
                                {cartData.length>0&&cartData.find(({ id }) => id === el.id) !== undefined ?
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
