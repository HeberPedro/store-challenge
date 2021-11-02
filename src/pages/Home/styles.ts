import { FlatList } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

import { Product as ProductType } from '../../store/modules/cart/types'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Loading = styled.ActivityIndicator`
  height: 50px;
  color: #fff;
`

export const ProductList = styled(
  FlatList as new () => FlatList<ProductType>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 20 },
})`
  padding: 20px;
  width: 100%;
`

export const Product = styled.View`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  elevation: 2;
  flex-grow: 1;
`

export const ProductImage = styled.Image`
  width: 250px;
  height: 250px;
  align-self: center;
`

export const ProductTitle = styled.Text`
  font-size: 16px;
  margin: 4px 0 2px;
`

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 24px;
  font-weight: 600;
`

export const ProductAddButton = styled(RectButton)`
  background: #22b24d;
  border-radius: 4px;
  flex-direction: row;
  overflow: hidden;
  margin-top: 10px;
  align-items: center;
  position: relative;
  height: 52px;
`

export const ProductAmount = styled.View`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  background: rgba(0, 0, 0, 0.17);
  height: 52px;
  width: 60px;
  position: absolute;
  top: 0;
  left: 0;
`

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 2px;
`

export const ProductAddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
`
