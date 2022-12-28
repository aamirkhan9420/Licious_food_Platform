import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as AppReducer } from "./AppReducer/reducer";
const rootReducer = combineReducers({
    AuthReducer,
    AppReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
