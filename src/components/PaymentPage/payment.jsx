import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  PinInput, PinInputField, useToast
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Visa, AmazonTransparent, Googlepay, Mastercard, PaypalTransparent } from "react-pay-icons";
import { useNavigate } from 'react-router-dom';
export default function Payment() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [otp, setotp] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const toast = useToast();
  let [creditCard, setCreditCard] = useState('');
  const [creditName, setCreditName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  let [space, setSpace] = useState(1);
  let [count, setCount] = useState(0)


  let yearnow = new Date().getFullYear()
  let monthnow = new Date().getMonth() + 1;
  monthnow = monthnow.toString()
  let daynow = new Date().getDate() + 7;
  daynow = daynow.toString()

  let currdate = `${yearnow}-${monthnow.length === 1 ? 0 + monthnow : monthnow}-${daynow.length === 1 ? 0 + daynow : daynow}`

  const otpSent = () => {

    if (creditCard && creditName && cardExpiry && cardCvv) {

      creditCard = creditCard.toString();

      if (creditCard.length === 19) {

        if (cardCvv.length === 3) {

          setLoading(true)

          setTimeout(() => {
            setotp(true)
            setLoading(false)
            toast({
              title: "OTP sent to your mobile",
              position: "top",
              isClosable: true,
              status: "success"
            })
          }, 2000);

        } else {
          toast({
            title: "Error",
            description: "CVV number should be 3 digits",
            position: "top",
            isClosable: true,
            status: "error"
          })
        }

      } else {
        toast({
          title: "Error",
          description: "Credit Card number should be 16 digits",
          position: "top",
          isClosable: true,
          status: "error"
        })
      }

    } else {
      toast({
        title: "Error",
        description: "All fields are mandatory",
        position: "top",
        isClosable: true,
        status: "error"
      })
    }
  }
  let inp = useRef()
  let handleInp = () => {
    inp.current.addEventListener("input", () => inp.current.value = formatNumber(inp.current.value.replaceAll(" ", "")));
    const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
      if (index !== 0 && !(index % 4)) seed += " ";
      return seed + next;
    }, "");
  }




  const orderConfirmed = () => {
    toast({
      title: "Order placed Successfully ,Thank You For choosing us",
      position: "top",
      isClosable: true,
      status: "success"
    })
    navigate("/")
  }

  return (
    <Flex direction="column" textAlign="center" alignContent="center" alignItems="center" justifyContent="center" p={"50px"}>

      <Box display="flex" alignContent="center" justifyContent="center" alignItems="center">
        <Visa style={{ margin: 10, width: 100 }} />
        <AmazonTransparent style={{ margin: 10, width: 100 }} />
        <Googlepay style={{ margin: 10, width: 100 }} />
        <PaypalTransparent style={{ margin: 10, width: 100 }} />
        <Mastercard style={{ margin: 10, width: 100 }} />
      </Box>

      <Heading>Payment</Heading>
      <Box width="50%">
        {!otp && <Stack spacing={8}>
          <FormControl isRequired>
            <FormLabel>Debit/Credit card Number</FormLabel>
            <Input ref={inp} id='credit-card-input' onChange={handleInp} required type="text" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" minLength="16" placeholder='xxxx xxxx xxxx xxxx' />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Name on Card</FormLabel>
            <Input onChange={(e) => setCreditName(e.target.value)} type="name" value={creditName} placeholder='xxxxxx xxxxx' />
          </FormControl>

          <Box display="flex" justifyContent="space-between">

            <FormControl w="50%" isRequired>
              <FormLabel>Expiry date</FormLabel>
              <Input min={currdate} onChange={(e) => setCardExpiry(e.target.value)} value={cardExpiry} type="date" />
            </FormControl>


            <FormControl w="30%" id="password" isRequired>
              <FormLabel>CVV</FormLabel>
              <InputGroup>
                <Input onChange={(e) => setCardCvv(e.target.value)} value={cardCvv} maxlength="3" type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

          </Box>
          <Box >
            <Button isLoading={isLoading} onClick={otpSent} width="30%" colorScheme="telegram">Send otp</Button>
          </Box>
        </Stack>}

        {otp &&
          <Box mt="10%" >
            <HStack alignItems="center" justifyContent="center" >
              <PinInput size="lg" >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>

            </HStack>

            <Button onClick={orderConfirmed} mt="10" width="30%" colorScheme="teal">Confirm Order</Button>
            <br />
            <Button isLoading={isLoading} onClick={otpSent} mt="10" width="20%" colorScheme="telegram">Resend OTP</Button>
          </Box>}

      </Box>
    </Flex>
  );
}