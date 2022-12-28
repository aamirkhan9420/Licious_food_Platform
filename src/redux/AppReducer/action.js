import axios from "axios";

import { GET_BESTSELLER_FAILURE, GET_BESTSELLER_REQUEST, GET_BESTSELLER_SUCCESS, GET_BREAKFAST_FAILURE, GET_BREAKFAST_REQUEST, GET_BREAKFAST_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_FISHDATA_FAILURE, GET_FISHDATA_REQUEST, GET_FISHDATA_SUCCESS, GET_SEARCH_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_USERPROFILE_FAILURE, GET_USERPROFILE_REQUEST, GET_USERPROFILE_SUCCESS, POST_CART_FAILURE, POST_CART_REQUEST, POST_CART_SUCCESS } from "./actionType";

const getData = (dispatch) => {
    dispatch({ type: GET_BESTSELLER_REQUEST })

    return axios.get("https://food-data.onrender.com/api/bestSeller")
        .then((res) => {
            console.log(res)
            return dispatch({ type: GET_BESTSELLER_SUCCESS, payload: res.data })
        })
        .catch((e) => {
            console.log(e)
            dispatch({ type: GET_BESTSELLER_FAILURE, payload: e })
        })
}
const getDataBreakFast = (dispatch) => {
    dispatch({ type: GET_BREAKFAST_REQUEST })

    return axios.get("https://food-data.onrender.com/api/sauce")
        .then((res) => {
            // console.log(res)
            return dispatch({ type: GET_BREAKFAST_SUCCESS, payload: res.data })
        })
        .catch((e) => {
            console.log(e)
            dispatch({ type: GET_BREAKFAST_FAILURE, payload: e })
        })
}

//fish data// fish data////fish data// fish data///fish data// fish data// 


const getRequestData = (dispatch, payl) => {
    dispatch({ type: GET_FISHDATA_REQUEST })

    return axios.get("https://food-data.onrender.com/api/" + payl)
        .then((res) => {
            // console.log(res)
            return dispatch({ type: GET_FISHDATA_SUCCESS, payload: res.data })
        })
        .catch((e) => {
            console.log(e)
            dispatch({ type: GET_FISHDATA_FAILURE, payload: e })
        })
}
//search data search data//
const getsearchData = (dispatch) => {
    dispatch({ type: GET_SEARCH_REQUEST })

    return axios.get("https://food-data.onrender.com/api/search")
        .then((res) => {
            // console.log(res)
            return dispatch({ type: GET_SEARCH_SUCCESS, payload: res.data })
        })
        .catch((e) => {
            console.log(e)
            dispatch({ type: GET_SEARCH_FAILURE, payload: e })
        })
}


// cart cart cart  cart cart cart  cart cart cart  cart cart cart//
const cartGet = (dispatch) => {
    dispatch({ type: GET_CART_REQUEST })

    return axios.get("https://food-data.onrender.com/api/cart")
        .then((res) => {
            console.log(res.data)

            return dispatch({ type: GET_CART_SUCCESS, payload: res.data })
        })
        .catch((e) => {
            console.log(e)
            dispatch({ type: GET_CART_FAILURE, payload: e })
        })
}

const cartPost = (newdata) => {

   
    return axios.post("https://food-data.onrender.com/api/cart", newdata)
        
}
const cartDelete = (id) => {



    return axios.delete(`https://food-data.onrender.com/api/cart/${id}`)
        .then((res) => {

            return res

        })
        .catch((e) => {
            console.log(e)

        })
}
const cartPatchQuantiy = (quantity, id) => {
    let count = JSON.parse(localStorage.getItem("total")) || 0

    return axios.patch(`https://food-data.onrender.com/api/cart/${id}`, { quantity: quantity })
        .then((res) => {

            return res

        })
        .catch((e) => {
            console.log(e)

        })
}

// GET_USERPROFILE_REQUEST GET_USERPROFILE_REQUEST GET_USERPROFILE_REQUESTGET_USERPROFILE_REQUEST//

const useprofilefunc=(dispatch,address)=>{
     dispatch({type:GET_USERPROFILE_REQUEST})
     return axios.post("https://food-data.onrender.com/api/cart",{address}).then((res)=>{
    
        console.log(res.data.address)
     dispatch({type:GET_USERPROFILE_SUCCESS,payload:res.data})

     }).catch((e)=>{
     dispatch({type:GET_USERPROFILE_FAILURE,payload:e})

        console.log(e)
     })
}




export { getData, getDataBreakFast, getRequestData, getsearchData, cartPost, cartGet, cartPatchQuantiy, cartDelete, useprofilefunc}
