import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../../routes'
import { StoreState } from '../../store/createStore'
import {
  removeFromCart,
  updateAmountRequest,
} from '../../store/modules/cart/actions'
import { Product } from '../../store/modules/cart/types'
import { formatPrice } from '../../utils'
import * as S from './styles'

type HeaderComponentProp = StackNavigationProp<
  RootStackParamList,
  'Home' | 'Cart'
>

const Cart = () => {
  const { navigate } = useNavigation<HeaderComponentProp>()

  const total = useSelector((state: StoreState) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount
      }, 0)
    )
  )

  const cart = useSelector((state: StoreState) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  )

  const dispatch = useDispatch()

  const handleProductIncrement = (product: Product) => {
    dispatch(updateAmountRequest(product.id, product.amount + 1))
  }

  const handleProductDecrement = (product: Product) =>
    dispatch(updateAmountRequest(product.id, product.amount - 1))

  const handleRemoveFromCart = (id: number) => dispatch(removeFromCart(id))

  return (
    <S.Container>
      {cart.length ? (
        <>
          <S.ProductList
            data={cart}
            keyExtractor={(product) => String(product.id)}
            renderItem={({ item: product }) => (
              <S.Product>
                <S.ProductPresentation>
                  <S.ProductImage source={{ uri: product.image }} />
                  <S.ProductInfoContainer>
                    <S.ProductTitle>{product.title}</S.ProductTitle>
                    <S.ProductPrice>{product.priceFormatted}</S.ProductPrice>
                  </S.ProductInfoContainer>
                </S.ProductPresentation>

                <S.ProductSubtotalContainer>
                  <S.ProductAmountContainer>
                    <S.ProductControlButton
                      onPress={() => handleProductDecrement(product)}
                    >
                      <Icon name="remove-circle" color="#22b24d" size={24} />
                    </S.ProductControlButton>
                    <S.ProductAmount value={String(product.amount)} />
                    <S.ProductControlButton
                      onPress={() => handleProductIncrement(product)}
                    >
                      <Icon name="add-circle" color="#22b24d" size={24} />
                    </S.ProductControlButton>
                  </S.ProductAmountContainer>

                  <S.ProductPriceContainer>
                    <S.ProductPrice>{product.priceFormatted}</S.ProductPrice>
                  </S.ProductPriceContainer>

                  <S.ProductDeleteButton
                    onPress={() => handleRemoveFromCart(product.id)}
                  >
                    <Icon name="delete" color="#22b24d" size={24} />
                  </S.ProductDeleteButton>
                </S.ProductSubtotalContainer>
              </S.Product>
            )}
          />
          <S.TotalContainer>
            <S.TotalText>TOTAL</S.TotalText>
            <S.Total>{total}</S.Total>
            <S.OrderButton>
              <S.OrderButtonText>FINALIZAR PEDIDO</S.OrderButtonText>
            </S.OrderButton>
          </S.TotalContainer>
        </>
      ) : (
        <S.EmptyCartContainer>
          <Icon name="remove-shopping-cart" color="#fff" size={100} />
          <S.EmptyCartTitle>Carrinho vazio</S.EmptyCartTitle>
          <S.OrderButton onPress={() => navigate('Home')}>
            <S.OrderButtonText>VOLTAR PARA HOME</S.OrderButtonText>
          </S.OrderButton>
        </S.EmptyCartContainer>
      )}
    </S.Container>
  )
}

export default Cart
