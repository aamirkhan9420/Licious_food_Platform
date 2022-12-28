import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import style from './MyOrder.module.css'
export default function MyOrder() {

    let cartData = useSelector((state) => {
        return state.AppReducer.cartData
    })
    let location=useLocation()
    console.log(location.state)
    useEffect(() => {

    }, [cartData.length])
    return (
        <div className={style.fish_container}>
            <div className={style.totalbill}>
                <h1>Total Bill:₹{location.state}</h1>
            </div>
            <div className={style.fish_main_parent}>
            <div className={style.fish_main_parent}>
                <div className={style.fish_parent_grid_div}>
                    {cartData.length > 0 && cartData.map((el) => (
                        <div key={el.index} className={style.single_div}>
                            

                                <img src={el.imgUrl} alt="fish" />
                         

                            <div className={style.prod_detail}>
                                

                                    <h2>{el.name}</h2>
                                    <p>{el.des}</p>
                                    <h2>{el.gross}{el.unit}</h2>
                              
                                <div className={style.prod_price_btn_div}>
                                   

                                        <h1>{el.price_tag}{el.cuurency}{el.price}</h1>
                                  
                           
                                </div>

                            </div>
                        </div>


                    ))


                    }
                </div>
            </div>
            </div>
        </div>
    )
}
