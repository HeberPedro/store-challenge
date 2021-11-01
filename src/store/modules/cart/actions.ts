import { action } from 'typesafe-actions'

import { Product } from './types'

export function addToCartRequest(id: number) {
  return action('@cart/ADD_REQUEST', {
    id,
  })
}

export function addToCartSuccess(product: Product) {
  return action('@cart/ADD_SUCCESS', {
    product,
  })
}

export function removeFromCart(id: number) {
  return action('@cart/REMOVE', {
    id,
  })
}

export function updateAmountRequest(id: number, amount: number) {
  return action('@cart/UPDATE_AMOUNT_REQUEST', {
    id,
    amount,
  })
}

export function updateAmountSuccess(id: number, amount: number) {
  return action('@cart/UPDATE_AMOUNT_SUCCESS', {
    id,
    amount,
  })
}
