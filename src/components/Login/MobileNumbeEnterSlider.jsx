import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { deletUser, getuserdata, signUpFun } from '../../redux/AuthReducer/action';
import style from "./MobileNumbeEnterSlider.module.css"
export default function MobileNumbeEnterSlider({ locationstate, locality, totalBill }) {
  let [value, setValue] = useState("")
  let [otp, setOtp] = useState("")
  let [show, setShow] = useState(false)
  let [showOtpInfoBox, setOtpInfoBox] = useState(false)
  let [showOtpInvalid, setShowOtpInvalid] = useState(false)

  let [textContaint, setTextContaint] = useState()
  let [otpvalue, setOtpvalue] = useState("")
  let userData = useSelector((state) => {
    return state.AuthReducer.userData
  })
  let cartData = useSelector((state) => {
    return state.AppReducer.cartData
  })

  // console.log(userData)
  let dispatch = useDispatch()
  let toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  let location = useLocation()
  // console.log(location);
  let navigate = useNavigate()
  let handleOtp = () => {
    let digit = "0123456789"
    let OTP = ""

    for (let i = 0; i < 4; i++) {
      OTP += digit[Math.floor(Math.random() * 10)]
    }
    setTimeout(() => {
      toast({
        title: 'Account created.',
        description: `One Time OTP is: ${OTP}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: "top"
      })
      setOtp(OTP)
    }, 5000)

  }

  let ResendOtp = () => {
    setTextContaint("Please wait for 1 min for Resend OTP")
    let digit = "0123456789"
    setShowOtpInvalid(false)

    setOtpInfoBox(true)
    let OTP = ""

    for (let i = 0; i < 4; i++) {
      OTP += digit[Math.floor(Math.random() * 10)]
    }
    setTimeout(() => {
      toast({
        title: 'Account created.',
        description: `One time OTP is: ${OTP}`,
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: "top"
      })
      setOtp(OTP)
      setTextContaint("An OTP has been sent to You")

    }, 5000)

  }
  const handleInput = (e) => {

    setValue(e.target.value)

  }
  const handleProceed = () => {

    signUpFun({ number: value }).then((res) => {

      setShow(!show)
      handleOtp()
      getuserdata(dispatch)


    }
    ).catch((e) => {
      console.log(e)
    })

  }
  const handleDeleteUser = () => {
    userData.map((el) => {
      deletUser(el.id).then((res) => {
        getuserdata(dispatch)
      }).catch((e) => {
        console.log(e)
      })



    })
  }
  const handleOtpValue = (e) => {
    setOtpvalue(e.target.value)
  }
  const confirmOTPNavigate = () => {
    console.log(otp)
    // console.log(otpvalue)

    if (otpvalue !== otp) {
      setOtpInfoBox(false)
      setShowOtpInvalid(true)
      setTextContaint("Invalid OTP")
    }
    else {

      setShow(!show)
      setValue("")
      setOtp("")
      onClose()
      navigate(location, { replace: true }, { state: { locality } })

    }

  }
  const firstField = React.useRef()
  useEffect(() => {
    if (locationstate === "plsOpen" && userData.length === 0) {
      onOpen()
    }
    getuserdata(dispatch)

  }, [dispatch, locationstate])
  return (
    <>
      {userData.length > 0 ? <Box className={style.login_box} >
        <Menu>
          <MenuButton >
            <Box className={style.login_box} >
              <BsPerson className={style.login_img} />
              <h2>Profile</h2>
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem className={style.profileOptionsImg} ><img src="https://i0.wp.com/www.indiaretailing.com/wp-content/uploads/2022/09/Licious-Logo.png?resize=681%2C330&ssl=1" alt="" /></MenuItem>
            <MenuItem className={style.profileOptions}>Account</MenuItem>
            <MenuItem className={style.profileOptions}>My Rewards</MenuItem>
            {cartData.length > 0 ? <Link to={"/Myorder"} state={totalBill}>
            <MenuItem className={style.profileOptions}>My Orders</MenuItem>
            </Link> : <MenuItem className={style.profileOptions}>My Orders</MenuItem>}
            <MenuItem className={style.profileOptions}>Refer a friend</MenuItem>
            <MenuItem className={style.profileOptions} onClick={() => handleDeleteUser()}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box> : <Box className={style.login_box} onClick={onOpen}>
        <BsPerson className={style.login_img} />
        <h2>Login</h2>
      </Box>}
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        size={"sm"}

      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody className={style.drawer}>
            <DrawerCloseButton className={style.closebtn} />
            <Box className={style.input_container}>
              <h1>Sign In/Sign Up</h1>
              <Box className={style.inputField_proceedbtn}>
                <Input value={value} placeholder='Enter Mobile Number' onChange={handleInput} className={style.inp} />
                {show && <InputGroup className={style.inputgroup}><Input placeholder='Enter OTP' className={style.inp} value={otpvalue} onChange={handleOtpValue} /> <InputRightElement width='5rem' className={style.inprightelement}
                 onClick={() => ResendOtp()} children="Resend OTP" cursor={"pointer"} /></InputGroup>
                }
                {showOtpInfoBox && <div className={style.otpinfo}><h1>{textContaint}</h1></div>}
                {showOtpInvalid && <div className={style.otpinvalid}><h1>{textContaint}</h1></div>}


                {show && <Button onClick={() => confirmOTPNavigate()}>Confirm OTP</Button>
                }
                {!show && <Button disabled={value.toString().length < 10 || value.toString().length > 10} onClick={() => handleProceed()}>Proceed Via OTP</Button>
                }
              </Box>
              <Box className={style.terms_div}>
              <span class={style.text}>By signing in you agree to our</span> <a href="/terms" target="_blank" class={style.textred}>terms and conditions</a>
              </Box>
            </Box>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}
