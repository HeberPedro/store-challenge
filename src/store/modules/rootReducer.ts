import { combineReducers } from 'redux'

import { StoreState } from '../createStore'
import cart from './cart/reducer'

export default combineReducers<StoreState>({
  cart,
})
