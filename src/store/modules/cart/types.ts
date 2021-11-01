import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type CartAction = ActionType<typeof actions>

export interface Product {
  id: number
  title: string
  price: number
  image: string
  amount: number
}

export interface Stock {
  id: number
  amount: number
}

export type CartState = Product[]
