import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import mockProducts from '../../mock/products.json'
import { formatPrice } from '../../utils'
import * as S from './styles'

export interface Product {
  id: number
  title: string
  price: number
  priceFormatted?: string
  image: string
  amount?: number
  loading?: boolean
}

const handleAddProduct = (id: number) => console.log(id)

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    function loadProducts() {
      const data = mockProducts.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))
      setProducts(data)
    }
    loadProducts()
  }, [])

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
                  <S.ProductAmountText>0</S.ProductAmountText>
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
