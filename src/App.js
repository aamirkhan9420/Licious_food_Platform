
import { useDisclosure, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
import AllRoutes from './components/routes/AllRoutes';
import { cartDelete, cartGet, cartPatchQuantiy, cartPost } from './redux/AppReducer/action';

function App() {

  let [text, setText] = useState()
  let location = useLocation()
  // console.log(location.state)
  let locationstate = location.state

  let [subtotal, setSubtotal] = useState(0)
  let [deliverycharge, setDeliveryCharge] = useState(0)
  let [discount, setDiscount] = useState(0)
  let [totalBill, setTotalBill] = useState(0)
  let [cuurency, setCurrency] = useState("")
  let toast = useToast()

  let cartData = useSelector((state) => {
    return state.AppReducer.cartData
  })
  let userData = useSelector((state) => {
    return state.AuthReducer.userData
  })
  let dispatch = useDispatch()
  const handleGetCart = () => {
    cartGet(dispatch)
  }
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handlePost = (el) => {

    if (userData.length == 0) {

      toast({
        title: 'Please Login first.',

        status: 'warning',
        duration: 9000,
        isClosable: true,
        position: 'top',
      })
      return

    }
    cartPost(el).then((res) => {

      cartGet(dispatch)

      let count = JSON.parse(localStorage.getItem("total")) || 0

      count = count + 1
      localStorage.setItem("total", JSON.stringify(count))
    }).catch((e) => {
      console.log(e)
    })





  }

  const handleDeletecard = (id) => {
    let count = JSON.parse(localStorage.getItem("total")) || 0

    cartDelete(id).then((res) => {

      if (count > 0) {
        count = count - 1
        localStorage.setItem("total", JSON.stringify(count))
        handleBillforDecreament()
        handleGetCart()
      }
      else {
        localStorage.setItem("total", JSON.stringify(0))
        handleBillforDecreament()
        handleGetCart()
      }



    }).catch((e) => {
      console.log(e)
    })

  }



  const handleBillforIncreament = () => {

    // console.log(cartData)

    let s = 0
    for (let i = 0; i < cartData.length; i++) {

      s += Number(cartData[i].price) * Number(cartData[i].quantity)
    }
    //  console.log(s)
    setSubtotal(s)
    if (s < 399) {
      setDeliveryCharge(39)
      setDiscount(0)


      setTotalBill(s + 39)

    }
    else {
      setDeliveryCharge(0)
      setDiscount(0)

      setTotalBill(s)


    }


  }

  const handleBillforDecreament = () => {
    if (cartData.length > 0) {
      cartData.map((el) => {


        if (subtotal >= el.price) {
          setSubtotal(subtotal - Number(el.price))
        }
        else {
          setSubtotal(0)
        }



      })
      if (subtotal < 399) {
        setDeliveryCharge(39)
        setDiscount(0)

        setTotalBill(subtotal + deliverycharge)

      }
      else if (subtotal > 399) {
        setDeliveryCharge(0)
        setDiscount(0)

        setTotalBill(subtotal)

      }
    }
  }



  const handleDelete = (id) => {
    cartDelete(id)
    handleBillforDecreament()
    handleGetCart()
  }

  const handleQuantityIncreament = (id) => {
    console.log("helo")
    let count = JSON.parse(localStorage.getItem("total")) || 0

    cartData.map((item) => {
      if (item.id === id) {
        console.log(typeof item.quantity)
        cartPatchQuantiy(item.quantity + 1, id)
        count = count + 1
        localStorage.setItem("total", JSON.stringify(count))
        handleBillforIncreament()

        handleGetCart()
      }

    })
    handleGetCart()

  }

  const handleQuantityDecreament = (id) => {
    let count = JSON.parse(localStorage.getItem("total")) || 0


    cartData.map((item) => {

      if (item.id === id && item.quantity > 1) {
        cartPatchQuantiy(item.quantity - 1, id)
        count = count - 1
        localStorage.setItem("total", JSON.stringify(count))
        handleBillforDecreament()
        handleGetCart()


      }
      else if (item.id === id && item.quantity < 2) {
        handleDelete(id)
        handleGetCart()
        if (count > 0) {
          count = count - 1
        }

        localStorage.setItem("total", JSON.stringify(count))
      }
    })
    handleGetCart()

  }

  useEffect(() => {

    handleGetCart()

  }, [dispatch])


  return (
    <div className="App">
      <Navbar setText={setText} locationstate={locationstate} subtotal={subtotal} deliverycharge={deliverycharge} discount={discount} totalBill={totalBill} cuurency={cuurency}
        handleBillforDecreament={handleBillforDecreament} handleBillforIncreament={handleBillforIncreament} handleDeletecard={handleDeletecard} handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament} />
      {/* <Home /> */}

      <AllRoutes text={text} handleQuantityIncreament={handleQuantityIncreament} handleQuantityDecreament={handleQuantityDecreament} handlePost={handlePost} />
      <Footer />  </div>
  );
}

export default App;
