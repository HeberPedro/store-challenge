import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../../routes'
import { Product } from '../../store/modules/cart/types'
import * as S from './styles'

type HeaderComponentProp = StackNavigationProp<
  RootStackParamList,
  'Home' | 'Cart'
>

const Cart = () => {
  const { navigate } = useNavigation<HeaderComponentProp>()

  const total = 0

  const cart: Product[] = []

  const increment = (product: Product) => console.log(product)

  const decrement = (product: Product) => console.log(product)

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
                    <S.ProductControlButton onPress={() => decrement(product)}>
                      <Icon name="remove-circle" color="#22b24d" size={24} />
                    </S.ProductControlButton>
                    <S.ProductAmount value={String(product.amount)} />
                    <S.ProductControlButton onPress={() => increment(product)}>
                      <Icon name="add-circle" color="#22b24d" size={24} />
                    </S.ProductControlButton>
                  </S.ProductAmountContainer>
                  <S.ProductDeleteButton
                    onPress={() => console.log(product.id)}
                  >
                    <Icon name="delete" color="#22b24d" size={24} />
                  </S.ProductDeleteButton>

                  <S.ProductPriceContainer>
                    <S.ProductPrice>{product.priceFormatted}</S.ProductPrice>
                  </S.ProductPriceContainer>
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
          <S.ProductTitle> Carrinho vazio</S.ProductTitle>
          <S.OrderButton onPress={() => navigate('Home')}>
            <S.OrderButtonText>VOLTAR PARA HOME</S.OrderButtonText>
          </S.OrderButton>
        </S.EmptyCartContainer>
      )}
    </S.Container>
  )
}

export default Cart
