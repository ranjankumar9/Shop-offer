import { legacy_createStore } from 'redux'
import { cartReducer } from './CartReducer/reducer'


export const store = legacy_createStore(
  cartReducer
)