import { Select, SelectField } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthContext from '../../AuthContext/AuthContext'
import Chicken from '../../Chicken/Chicken'
import Mutton from '../../Mutton/Mutton'
import Prawn from '../../prawn/Prawn'

import ReadyCook from '../../ReadyCook/ReadyCook'
import SearchHome from '../../Search/SearchHome'
import SinglePage from '../../Singlepage/SinglePage'
import Spread from '../../Spread/Spread'
import Fish from '../Fish/Fish'
import Home from '../Home/Home'
import PageNotFound from '../PageNotFound/PageNotFound'
import Payment from '../PaymentPage/payment'
import PaymentPage from '../PaymentPage/PaymentPage'
import MyOrder from '../YourOrder/MyOrder'


export default function AllRoutes({ text, handleQuantityIncreament, handleQuantityDecreament, handlePost }) {

  return (

    <div>

      <Routes>
        <Route path="/" element={<Home handleQuantityDecreament={handleQuantityDecreament} handleQuantityIncreament={handleQuantityIncreament}  handlePost={handlePost}/>} />
        <Route path="/fishdata" element={<Fish handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament} handlePost={handlePost} />} />
        <Route path="/Chicken" element={<Chicken handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament} handlePost={handlePost} />} />
        <Route path="/Mutton" element={<Mutton handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament} handlePost={handlePost} />} />
        <Route path="/ReadyCook" element={<ReadyCook handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament} handlePost={handlePost} />} />
        <Route path="/Spread" element={<Spread handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament} handlePost={handlePost} />} />
        <Route path="/Prawn" element={<Prawn handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament} handlePost={handlePost} />} />
        <Route path="/SinglePage" element={<SinglePage handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament} handlePost={handlePost} />} />
        <Route path="/Myorder" element={<MyOrder />} />
       
        
        <Route path='*' element={<PageNotFound />} />
        <Route path="/paymentpage" element={<AuthContext> <PaymentPage /> </AuthContext>} />
        <Route path="/payment" 
        element={ <Payment />} />
        
        



        <Route path="/SearchHome" element={<SearchHome text={text} handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament} handlePost={handlePost} />} />

      </Routes>
    </div>
  )
}
