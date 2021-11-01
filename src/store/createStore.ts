import { createStore, applyMiddleware, Middleware, Reducer } from 'redux'

import { CartAction, CartState } from './modules/cart/types'

export interface StoreState {
  cart: CartState
}

export type StoreAction = CartAction

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares)

  return createStore(reducers, enhancer)
}
