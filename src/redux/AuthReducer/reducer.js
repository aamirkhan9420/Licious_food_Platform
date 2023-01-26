import { GETSIGNUP_FAILURE, GETSIGNUP_REQUEST, GETSIGNUP_SUCCESS} from "./actionType"

let initial = {
  isLoading: false,
  isAuth: false,
  userData: []
}
export const reducer = (state = initial, action) => {
  let { type, payload } = action
  switch (type) {
    
    case GETSIGNUP_REQUEST: return { ...state, isLoading: true }
    case GETSIGNUP_SUCCESS: return { ...state, isLoading: false, isAuth: true, userData: payload }
    case GETSIGNUP_FAILURE: return { ...state, isLoading: false, isAuth: false, userData: [] }

    default: return state
  }
}