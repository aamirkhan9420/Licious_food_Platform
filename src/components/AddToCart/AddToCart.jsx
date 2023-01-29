
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure, useToast } from '@chakra-ui/react'

import React from 'react'
import { useEffect } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';
import style from "./AddToCart.module.css"
import { HiOutlineX } from "react-icons/hi";


import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export default function AddToCart({ locality, subtotal, deliverycharge, discount, totalBill, handleBillforIncreament, handleDeletecard, handleQuantityIncreament, handleQuantityDecreament }) {

  let cartData = useSelector((state) => {
    return state.AppReducer.cartData
  })


  let navigator = useNavigate()
  const handleSlider = () => {
    onClose()
    navigator("/paymentpage", { state: { locality,cartData } })
  }


  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  let checkQuantity = (el) => {
    let ans = cartData.map((item) => {


      if (item.id === el.id) {

        return item.quantity
      }
    })
    return ans
  }

  let total;
  total = JSON.parse(localStorage.getItem("total")) || 0

  const handleCartSlider = () => {

    if (total === 0) {
      toast({
        title: `Cart is Empty`,
        position: "top-right",
        isClosable: true,
        status: "info"

      })
      onClose()

    }

    else {
      onOpen()
    }
    // handleBill()

  }
  // console.log(subtotal);
  const firstField = React.useRef()

  useEffect(() => {
    handleBillforIncreament()

  }, [cartData])

  return (
    <>
      <Box className={style.cart_icon_box} onClick={handleCartSlider}>
        <AiOutlineShoppingCart className={style.cart_icon} />
        {total > 0 && <span className={style.badge}>{total}</span>}
        <h2 >Cart</h2>

      </Box>

      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        size={"sm"}

      >
        <DrawerOverlay />
        {total > 0 && <DrawerContent>


          <DrawerBody >
            <DrawerCloseButton className={style.closebtn} />
            <div className={style.heading_div}>
              <h1>Order Summary</h1>
              <h2>{totalBill < 399 ? "Your cart value is less than ₹399 & delivery charge applies" : "Congratulation Your delivery charge is waived off!!!"}</h2>
            </div>
            <div className={style.cart_parent}>

              {cartData.length > 0 && cartData.map((el, index) => (
                <div className={style.single_proddetail_div}>
                  <div className={style.name_no_cut_div}>
                    <h2><span>{index + 1}</span>{el.name} </h2>
                    <HiOutlineX className={style.single_Prod_div_cross_icon} onClick={() => handleDeletecard(el.id)} />


                  </div>
                  <div className={style.weight_price_btn_parent}>
                    <div className={style.weight_price_btn_maindiv}>
                      <div> <h2>{el.gross}{el.unit}</h2> <h3>{el.cuurency}{el.price}</h3></div>
                      <div className={style.add_remove_btn_div}><button onClick={() => handleQuantityDecreament(el.id)}>-</button><h1>{checkQuantity(el)}</h1><button onClick={() => handleQuantityIncreament(el.id)}>+</button></div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className={style.bill_parent}>
                <h1>BILL DETAILS</h1>
                <div><p>Subtotal</p><p>{subtotal}</p></div>
                <div><p>Delivery Charge</p><p>{deliverycharge}</p></div>
                <div><p>Discount</p><p>{discount}</p></div>
                <div><h1>Total</h1><h2>₹ {totalBill}</h2></div>
              </div>
            </div>
            <div className={style.proceedtopay_parent}>
              <div>
                <h2>Total:</h2>
                <h3>₹ {totalBill}</h3>
                <AiOutlineInfoCircle className={style.infoIcon} />
              </div>
              <div>

                <button onClick={() => handleSlider()}><h1>Proceed to checkout</h1></button>

              </div>
            </div>
          </DrawerBody>

        </DrawerContent>}
      </Drawer>
    </>
  )
}
