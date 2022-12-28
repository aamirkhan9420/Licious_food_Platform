import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useprofilefunc } from '../../redux/AppReducer/action'
import style from "./PaymentPage.module.css"
export default function PaymentPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let navigate=useNavigate()
  let location = useLocation()
  // let  loca=location.state.locality

  let [loc,setLocation]=useState()
  let [flat, setFlat] = useState()
  let [landMark, setLandMark] = useState()
  let [city, setCity] = useState()
  let [email, setEmail] = useState()
  let [mobile, setMobile] = useState()
  let [fullname, setFullName] = useState()
  let [adress,setAdrres]=useState()
  let dispatch=useDispatch()
  const toast=useToast()
  let handleForm = (e) => {  
      e.preventDefault()
        let arr=[loc,flat,landMark,city,email,mobile,fullname]
   setAdrres(arr)
      onOpen()
  }
 const hadleuserpfile=()=>{
  
  useprofilefunc(dispatch,adress)
  onClose()
  toast({
    title: 'User details added',
      status: 'success',
    duration: 9000,
    isClosable: true,
    position: "top"
  })
  navigate("/Payment")
  }
  return (
    <div className={style.form_container}>
      <div className={style.from_parent}>
        <form action="" onSubmit={handleForm}>
          <FormControl className={style.form}>
            <FormLabel >Enter Location</FormLabel>
            <Select placeholder='Select Your Location' onChange={(e)=>setLocation(e.target.value)}>
              <option value="Maharashtra">Maharashtra</option>
              <option value="TamilNadu">TamilNadu</option>
              <option value="Gujrat">Gujrat</option>
              <option value="Jharkhand">Jharkhand</option>
            </Select>

            <FormLabel>Flat no/Building name/Street name</FormLabel>
            <Input type='text' value={flat} onChange={(e) => setFlat(e.target.value)} />

            <FormLabel>Landmark(optional)</FormLabel>
            <Input type='text' value={landMark} onChange={(e) => setLandMark(e.target.value)} />

            <FormLabel>City</FormLabel>
            <Input type='text' value={city} onChange={(e) => setCity(e.target.value)} />

            <FormLabel>Mobile number</FormLabel>
            <Input type='number' value={mobile} onChange={(e) => setMobile(e.target.value)} />

            <FormLabel>Enter Email</FormLabel>
            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

            <FormLabel>Enter Full name</FormLabel>
            <Input type='text' value={fullname} onChange={(e) => setFullName(e.target.value)} />

            <Button type='submit' className={style.btn}  >Save & Proceed </Button >
          </FormControl>
        </form>
      </div>
     
 

 
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'color={"black"}>
            <span className={style.spn}>location:</span>  {loc}
            </Text>
            <Text fontWeight='bold' mb='1rem'>
               
            <span className={style.spn}>Flat number/Buliding number/Street Name:</span>  {flat}

            </Text>
            <Text fontWeight='bold' mb='1rem'>
            <span className={style.spn}>Landmark: </span>{landMark}
         
            </Text>
            <Text fontWeight='bold' mb='1rem'>
            <span className={style.spn}>City:</span>{city}
            
           
            </Text>
            <Text fontWeight='bold' mb='1rem'>
           
            <span className={style.spn}> Email:</span> {email}

            </Text>
            <Text fontWeight='bold' mb='1rem'>
            <span className={style.spn}> Mobile number:</span> {mobile}

            
            </Text>
            <Text fontWeight='bold' mb='1rem'>
            <span className={style.spn}> Full Name:</span>  {fullname}

          
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button  className={style.confbtn} onClick={()=>hadleuserpfile()}>Confirm user details & proceed to pay</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  
    </div>
  )
}
