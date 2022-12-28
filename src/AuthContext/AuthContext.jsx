import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export default function AuthContext({children}) { 
     let location=useLocation()
     let isAuth=useSelector((state)=>{
   return state.AuthReducer.isAuth
     })
     let userData=useSelector((state)=>{
      return state.AuthReducer.userData
        })
        console.log(userData)
      
 
  


     if((userData.length<=0)){
      return <Navigate to={"/"} replace state={"plsOpen"}/>
          }
  return (
    children
  )
}
