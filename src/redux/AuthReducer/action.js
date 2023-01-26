import axios from "axios"
import { GETSIGNUP_REQUEST, GETSIGNUP_SUCCESS, GETSIGNUP_FAILURE } from "./actionType"
let signUpFun = (payload) => {
  return axios.post("https://food-data.onrender.com/api/signupdata", payload).then((res) => {
  }).catch((er) => {
    console.log(er)
  })
}

const getuserdata = (dispatch) => {
  dispatch({ type: GETSIGNUP_REQUEST })
  return axios.get("https://food-data.onrender.com/api/signupdata").then((res) => {
    console.log(res.data)
    dispatch({ type: GETSIGNUP_SUCCESS, payload: res.data })
  }).catch((e) => {
    dispatch({ type: GETSIGNUP_FAILURE, payload: e })

  })

}

const deletUser = (id) => {
  return axios.delete(`https://food-data.onrender.com/api/signupdata/${id}`).then((res) => {
    console.log(res.data)

  }).catch((e) => {
    console.log(e)

  })
}
export { signUpFun, getuserdata, deletUser }