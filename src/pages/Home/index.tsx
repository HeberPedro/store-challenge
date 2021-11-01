import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux'

import { api } from '../../services'
import { StoreState } from '../../store/createStore'
import { addToCartRequest } from '../../store/modules/cart/actions'
import { Product } from '../../store/modules/cart/types'
import { formatPrice } from '../../utils'
import * as S from './styles'

interface ProductFormatted extends Product {
  priceFormatted: string
}

interface CartItemsAmount {
  [key: number]: number
}

const Home = () => {
  const [products, setProducts] = useState<ProductFormatted[]>([])

  const amount = useSelector((state: StoreState) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount

      return sumAmount
    }, {} as CartItemsAmount)
  )

  const dispatch = useDispatch()

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>('/products')

      const data = response.data.map((product: Product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))

      setProducts(data)
    }

    loadProducts()
  }, [])

  const handleAddProduct = useCallback(
    (id: number) => {
      dispatch(addToCartRequest(id))
    },
    [dispatch]
  )

  return (
    <S.Container>
      {products.length ? (
        <S.ProductList
          data={products}
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item: product }) => (
            <S.Product>
              <S.ProductImage source={{ uri: product.image }} />
              <S.ProductTitle>{product.title}</S.ProductTitle>
              <S.ProductPrice>{product.priceFormatted}</S.ProductPrice>
              <S.ProductAddButton onPress={() => handleAddProduct(product.id)}>
                <S.ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <S.ProductAmountText>
                    {amount[product.id] || 0}
                  </S.ProductAmountText>
                </S.ProductAmount>
                <S.ProductAddButtonText>
                  Adicionar ao carrinho
                </S.ProductAddButtonText>
              </S.ProductAddButton>
            </S.Product>
          )}
        />
      ) : (
        <ActivityIndicator color="#fff" size={70} />
      )}
    </S.Container>
  )
}

export default Home
