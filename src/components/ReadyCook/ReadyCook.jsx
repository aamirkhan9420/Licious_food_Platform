import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartGet, getRequestData } from '../../redux/AppReducer/action'
import style from './ReadyCook.module.css'
export default function ReadyCook({ handleQuantityIncreament, handleQuantityDecreament, handlePost }) {
    let foodData = useSelector((state) => {
        return state.AppReducer.foodData
    })
    let isLoading = useSelector((state) => {
        return state.AppReducer.isLoading
    })
    let cartData = useSelector((state) => {
        return state.AppReducer.cartData
    })
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
        getRequestData(dispatch, "Dishes_of_chicken")
    }
    useEffect(() => {
        handleGetCart()
        fishFunction()

    }, [dispatch, cartGet])
    if (isLoading) {
        return <Spinner
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


            <div className={style.fish_main_parent}>
                <div className={style.fish_parent_grid_div}>
                    {foodData.length > 0 && foodData.map((el) => (
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
