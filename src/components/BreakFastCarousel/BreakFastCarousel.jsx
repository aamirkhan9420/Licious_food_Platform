import React from 'react'
import "./BreakFastCarousel.css"
export default function BreakFastCarousel({props}) {
    let box =document.querySelector(".product_BreackFast_container")
  
let btnPressPrv=()=>{
  let width=box.clientWidth;
  box.scrollLeft=box.scrollLeft-width
  
}
let btnPressNxt=()=>{
  let width=box.clientWidth;
  box.scrollLeft=box.scrollLeft+width
  
}

  return (
    <div  className="carouselBreakFast">
       
        <button className="prv_btn" onClick={()=>btnPressPrv()}><p>&lt;</p></button>
      
       <div className="product_BreackFast_container" >
 {
  props.length>0 && props.map((el)=>(
    
    <div key={el.index} className="single_div">
       <img src={el.imgUrl} alt="bestSeller" />  
       <div className='prod_detail'>
         <h2>{el.name}</h2>
          <p>{el.des}</p>
         <h2>{el.gross}{el.unit}</h2>
         <div className='prod_price_btn_div'>
          <h1>{el.price_tag}{el.cuurency}{el.price}</h1>
          <button>ADD TO CART</button>
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
