import { Input, InputGroup,  InputRightElement } from '@chakra-ui/react'
import { FcSearch } from "react-icons/fc";
import React from 'react'
import style from './Search.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {useThrottle} from "use-throttle"

export default function Search({setText}) {
    let [searchdata,setSearchData]=useState()
    let handleInput=(e)=>{
        setSearchData(e.target.value)
    }
    
    let throttle=useThrottle(searchdata,1000)
    useEffect(()=>{
        
        setText(throttle)
    },[throttle,setText])
  return (
    <div className={style.searchInput_div}><Link to={"/SearchHome"}>
        <InputGroup   >
                <InputRightElement pointerEvents='none' children={<FcSearch color='red.600' fontSize="20px" />}/>
                  
                <Input className={style.inputseacrh}  focusBorderColor='none'  type='text' placeholder='Search for any delicious product' value={searchdata} onChange={(e)=>handleInput(e)}/>
                
            </InputGroup></Link>
    </div>
  )
}
