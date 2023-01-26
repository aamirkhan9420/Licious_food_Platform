import { GET_BESTSELLER_FAILURE, GET_BESTSELLER_REQUEST, GET_BESTSELLER_SUCCESS, GET_BREAKFAST_FAILURE, GET_BREAKFAST_REQUEST, GET_BREAKFAST_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_FISHDATA_FAILURE, GET_FISHDATA_REQUEST, GET_FISHDATA_SUCCESS, GET_SEARCH_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_USERPROFILE_FAILURE, GET_USERPROFILE_REQUEST, GET_USERPROFILE_SUCCESS} from "./actionType";

let initial = {
    foodData: [],
    breakFastData: [],
    cartData: [],
    isErr: false,
    isLoading: false,
    userprofile: []
}
export const reducer = (state = initial, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_BESTSELLER_REQUEST: return { ...state, isErr: false, isLoading: true };
        case GET_BESTSELLER_SUCCESS: return { ...state, isLoading: false, foodData: payload };
        case GET_BESTSELLER_FAILURE: return { ...state, isErr: true, isLoading: false, foodData: [] };


        case GET_BREAKFAST_REQUEST: return { ...state, isErr: false, isLoading: true };
        case GET_BREAKFAST_SUCCESS: return { ...state, isLoading: false, breakFastData: payload };
        case GET_BREAKFAST_FAILURE: return { ...state, isErr: true, isLoading: false, breakFastData: [] };


        // GET_FISHDATA_REQUEST  GET_FISHDATA_REQUEST GET_FISHDATA_REQUEST//

        case GET_FISHDATA_REQUEST: return { ...state, isErr: false, isLoading: true };
        case GET_FISHDATA_SUCCESS: return { ...state, isLoading: false, foodData: payload };
        case GET_FISHDATA_FAILURE: return { ...state, isErr: true, isLoading: false, foodData: [] };

        //  SEARCH DATA SEARCH DATA SEARCH DATA SEARCH DATA  SEARCH DATA//


        case GET_SEARCH_REQUEST: return { ...state, isErr: false, isLoading: true };
        case GET_SEARCH_SUCCESS: return { ...state, isLoading: false, foodData: payload };
        case GET_SEARCH_FAILURE: return { ...state, isErr: true, isLoading: false, foodData: [] };

        // GET CART REQUEST GET CART REQUEST  GET CART REQUEST GET CART REQUEST //

        case GET_CART_REQUEST: return { ...state, isErr: false, isLoading: true };
        case GET_CART_SUCCESS: return { ...state, isLoading: false, cartData: payload };
        case GET_CART_FAILURE: return { ...state, isErr: true, isLoading: false, cartData: [] };

        // GET_USERPROFILE_REQUEST GET_USERPROFILE_SUCCESS  GET_USERPROFILE_FAILURE //

        case GET_USERPROFILE_REQUEST: return { ...state, isErr: false, isLoading: true };
        case GET_USERPROFILE_SUCCESS: return { ...state, isLoading: false, userprofile: payload };
        case GET_USERPROFILE_FAILURE: return { ...state, isErr: true, isLoading: false, userprofile: [] };

        default: return state
    }

}
