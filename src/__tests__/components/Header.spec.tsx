import '@testing-library/jest-native'

import React from 'react'

import Header from '../../components/Header'
import { render } from '../test-utils'

const mockCart = [
  {
    amount: 2,
    id: 1,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    price: 179.9,
    title: 'Tênis de Caminhada Leve Confortável',
  },
  {
    amount: 1,
    id: 2,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    price: 139.9,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
  },
]

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}))

describe('[COMPONENT]: Header', () => {
  it('should be render Header component', () => {
    render(<Header />)
  })

  it('should be able to render the amount of products added to cart', () => {
    const { getByTestId } = render(<Header />, {
      initialState: { cart: mockCart },
    })

    const cartSizeCounter = getByTestId('cart-size')
    expect(cartSizeCounter).toHaveTextContent('2')
  })
})
