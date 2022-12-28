import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartGet, getRequestData } from '../../redux/AppReducer/action'
import "./Storage.css"
export default function Storage({props,handleQuantityDecreament,handleQuantityIncreament,handlePost}) {
  

     
      let cartData = useSelector((state) => {
          return state.AppReducer.cartData
      })
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
           getRequestData(dispatch, "fish")
           handleGetCart()
       }
   
       let box =document.querySelector(".product_container")
  
let btnPressPrv=()=>{
  let width=box.clientWidth;
  box.scrollLeft=box.scrollLeft-width
  
}
let btnPressNxt=()=>{
  let width=box.clientWidth;
  box.scrollLeft=box.scrollLeft+width
  
}
useEffect(() => {
  handleGetCart()
  fishFunction()
  
}, [dispatch, cartGet])

  return (
    <div  className="carousel">
       
        <button className="prv_btn" onClick={()=>btnPressPrv()}><p>&lt;</p></button>
      
       <div className="product_container" >
 {
  props.length>0 && props.map((el)=>(
    
    <div key={el.index} className="single_div">
   <Link to={"/SinglePage"} state={el} >

       <img src={el.imgUrl} alt="bestSeller" />  
       </Link>
       <div className='prod_detail'>
         <h2>{el.name}</h2>
          <p>{el.des}</p>
         <h2>{el.gross}{el.unit}</h2>
         <div className='prod_price_btn_div'>
          {/* className={style.add_remove_btn_div} */}
          <h1>{el.price_tag}{el.cuurency}{el.price}</h1>
          
          {cartData.length>0&&cartData.find(({ id }) => id === el.id) !== undefined ?
                                     <div className ="add_remove_btn_div"><button onClick={() => handleQuantityDecreament(el.id)}>-</button><h1>{checkQuantity(el)}</h1><button onClick={() => handleQuantityIncreament(el.id)}>+</button></div>
                                      : <button onClick={() => handlePost(el)}>ADD TO CART</button>}
         </div>

       </div>
       
       </div>   
   )) 
 } 
 </div>
 <button className="nxt_btn" onClick={()=>btnPressNxt()}><p>&gt;</p></button>

    </div>
  )
}
