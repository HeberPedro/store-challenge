import { Alert } from 'react-native'
import { call, select, put, all, takeLatest } from 'redux-saga/effects'

import { PayloadAction } from 'typesafe-actions'

import { StoreState } from '@/store/createStore'

import { api } from '../../../services'
import { formatPrice } from '../../../utils'
import { addToCartSuccess, updateAmountSuccess } from './actions'
import { Product, Stock } from './types'

export function* addToCart(action: PayloadAction<string, Product>) {
  const { id } = action.payload

  const productExists: Product | undefined = yield select((state: StoreState) =>
    state.cart.find((product) => product.id === id)
  )

  try {
    const { data } = yield call(api.get, `/stock/${id}`)
    const stockAmount = data.amount as number
    const currentAmount = productExists ? productExists.amount : 0

    const amount = currentAmount + 1

    if (amount > stockAmount) {
      Alert.alert(
        'Fora de estoque',
        'Desculpe, mas a quantidade solicitada não está disponível em estoque.'
      )
      return
    }

    if (productExists) {
      yield put(updateAmountSuccess(id, amount))
    } else {
      const { data } = yield call(api.get, `/products/${id}`)

      const product = {
        ...data,
        amount: 1,
        priceFormatted: formatPrice(data.price),
      }

      yield put(addToCartSuccess(product))
    }
  } catch (err) {
    Alert.alert('Oh não, algum erro aconteceu.', 'Nós pedimos desculpas.')
  }
}

function* updateAmount(action: PayloadAction<string, Stock>) {
  const { id, amount } = action.payload

  if (amount <= 0) {
    return
  }

  const { data } = yield call(api.get, `stock/${id}`)
  const stockAmount = data.amount

  if (amount > stockAmount) {
    Alert.alert(
      'Fora de estoque',
      'Desculpe, mas a quantidade solicitada não está disponível em estoque.'
    )
    return
  }

  yield put(updateAmountSuccess(id, amount))
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
])
