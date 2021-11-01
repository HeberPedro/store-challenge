import produce from 'immer'

import { CartState, CartAction } from './types'

const initialState: CartState = []

export default function cart(
  state = initialState,
  action: CartAction
): CartState {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        const { product } = action.payload
        draft.push(product)
      })
    case '@cart/REMOVE':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (product) => product.id === action.payload.id
        )

        if (productIndex >= 0) {
          draft.splice(productIndex, 1)
        }
      })
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.payload.id)

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.payload.amount)
        }
      })
    }

    default:
      return state
  }
}
