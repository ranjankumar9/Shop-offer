import { applyMiddleware, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import  reducers  from './CartReducer/reducer'
import { cartReducer } from "./CartReducer/reducer"


export const store = legacy_createStore(
  cartReducer,
  applyMiddleware(thunk)
)