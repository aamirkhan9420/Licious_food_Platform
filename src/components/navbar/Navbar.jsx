import { Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'
import style from "./Navbar.module.css"
import { GoLocation } from "react-icons/go";
import { AiOutlineAppstore } from "react-icons/ai";
import MobileNumbeEnterSlider from '../Login/MobileNumbeEnterSlider'
import Search from '../Search/Search'
import { useState } from 'react'
import AddToCart from '../AddToCart/AddToCart'
export default function Navbar({ handlePost, handleBillforIncreament, setText, locationstate, subtotal, deliverycharge, discount, totalBill, cuurency, handleDeletecard, handleQuantityIncreament, handleQuantityDecreament }) {
  let [locality, setLocality] = useState()

  const handlechange = () => {
    const loc = document.querySelector("#locationselected").value
    setLocality(loc)
  }
  return (
    <div id={style.nav_container}>
      <Link to={"/"}>
        <Logo />
      </Link>
      {/* location location start*/}
      <div className={style.select_container}>
        <div className={style.location_icon_div}>
          <GoLocation className={style.location} />
        </div>
        <select name="" id="locationselected" onChange={handlechange}>
          <option value="Select Your Location">Select Your Location</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="TamilNadu">TamilNadu</option>
          <option value="Gujrat">Gujrat</option>
          <option value="Jharkhand">Jharkhand</option>
        </select>
      </div>
      {/* location location end*/}

      {/* search input start */}
      <Search setText={setText} />
      {/* search input start */}

      {/* category start*/}
      <Menu>
        <MenuButton   >
          <div className={style.categories_icon}>

            <AiOutlineAppstore className={style.icon} />

            <h2>Categories</h2>
          </div></MenuButton>
        <MenuList >

          <Link to={"/"}>
            <MenuItem minH='20px' minW="400px">

              <Image
                boxSize='2.5rem'
                borderRadius='full'
                src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png'
                alt='Simon the pensive'
                mr='16px'
              />
              <span>Today's Deals</span>
            </MenuItem>
          </Link>
          <Link to={"/Chicken"}>
            <MenuItem minH='20px' minW="400px">
              <Image
                boxSize='2.5rem'
                borderRadius='full'
                src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png'
                alt='Chicken'
                mr='12px'
              />
              <span >Chicken</span>
            </MenuItem>
          </Link>
          <Link to={"/fishdata"}>
            <MenuItem minH='20px' minW="400px" >
              <Image
                boxSize='2.5rem'
                borderRadius='full'
                src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png'
                alt='Fish & SeaFood'
                mr='12px'
              />
              <span>Fish & Seafood</span>
            </MenuItem>
          </Link>
          <Link to={"/Mutton"}>
            <MenuItem minH='40px' minW="400px">
              <Image
                boxSize='2.5rem'
                borderRadius='full'
                src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png'
                alt='Mutton'
                mr='12px'
              />
              <span>Mutton</span>
            </MenuItem>
          </Link>
          <Link to={"/ReadyCook"}>
            <MenuItem minH='20px' minW="400px">
              <Image
                boxSize='2.5rem'
                borderRadius='full'
                src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png'
                alt='Ready to Cook'
                mr='12px'
              />
              <span>Ready to Cook</span>
            </MenuItem>
          </Link>
          <Link to={"/Prawn"}>
            <MenuItem minH='20px' minW="400px">
              <Image
                boxSize='2.5rem'
                borderRadius='full'
                src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png'
                alt='Prawns'
                mr='12px'
              />
              <span>Prawns</span>
            </MenuItem>
          </Link>
          <Link>
            <MenuItem minH='20px' minW="400px">
              <Image
                boxSize='2.5rem'
                borderRadius='full'
                src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png'
                alt='Cold Cuts'
                mr='12px'
              />
              <span>Cold Cuts</span>
            </MenuItem>
          </Link>
          <Link to={"/Spread"}>
            <MenuItem minH='20px' minW="400px">
              <Image
                boxSize='2.5rem'
                borderRadius='full'
                src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png'
                alt='Spread'
                mr='12px'
              />
              <span>Spread</span>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
      {/* category end */}

      <MobileNumbeEnterSlider locationstate={locationstate} locality={locality} totalBill={totalBill} />
      <AddToCart handleBillforIncreament={handleBillforIncreament} locality={locality}
        totalBill={totalBill} cuurency={cuurency}
        subtotal={subtotal} deliverycharge={deliverycharge} discount={discount} handleDeletecard={handleDeletecard} handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament}
      />
    </div>
  )
}

