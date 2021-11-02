import reducer from '../../../../store/modules/cart/reducer'
import { CartState } from '../../../../store/modules/cart/types'

describe('[REDUCER]: Cart', () => {
  it('should add cart values when call action with type @cart/ADD_SUCCESS', () => {
    const previousState = [] as CartState

    const payload = {
      product: {
        id: 1,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        price: 179.9,
        title: 'Tênis de Caminhada Leve Confortável',
        amount: 0,
      },
    }

    const expectedState = [
      {
        id: 1,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        price: 179.9,
        title: 'Tênis de Caminhada Leve Confortável',
        amount: 0,
      },
    ]

    const state = reducer(previousState, {
      type: '@cart/ADD_SUCCESS',
      payload,
    })

    expect(state).toEqual(expectedState)
  })

  it('should remove cart values when call action with type @cart/REMOVE', () => {
    const previousState = [
      {
        amount: 1,
        id: 2,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        price: 139.9,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      },
    ]

    const payload = {
      id: 2,
    }

    const expectedState = [] as CartState

    const state = reducer(previousState, { type: '@cart/REMOVE', payload })

    expect(state).toEqual(expectedState)
  })
})
