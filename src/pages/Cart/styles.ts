import { FlatList } from 'react-native'

import styled from 'styled-components/native'

import { Product as ProductType } from '../../store/modules/cart/types'

export const Container = styled.View`
  background: #191920;
  flex: 1;
`

export const ProductList = styled(FlatList as new () => FlatList<ProductType>)`
  margin-top: 15px;
  background: #fff;
  border-radius: 4px;
  height: 200px;
  margin: 0 15px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`

export const Product = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 0 10px;
`

export const Total = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 32px;
  margin: 0px 30px 15px;
`

export const TotalText = styled.Text`
  color: #999999;
  font-size: 18px;
  font-weight: bold;
`

export const TotalContainer = styled.View`
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 0 15px;
  margin-bottom: 30px;
  padding: 15px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`

export const OrderButton = styled.TouchableOpacity`
  background: #22b24d;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
  height: 42px;
  margin-top: auto;
`

export const OrderButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`

export const ProductTitle = styled.Text`
  color: #000;
  font-size: 16px;
  margin-bottom: 15px;
`

export const ProductPriceContainer = styled.View``

export const ProductPrice = styled.Text`
  color: #000;
  margin: 14px 0px;
  font-size: 16px;
  margin-bottom: 14px;
  font-weight: bold;
`

export const ProductSubtotalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #eeeeee;
  border-radius: 4px;
`

export const ProductAmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  color: #000;
  text-align: center;
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`

export const ProductPresentation = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ProductInfoContainer = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`

export const ProductDeleteButton = styled.TouchableOpacity`
  padding: 6px;
`

export const ProductControlButton = styled.TouchableOpacity``

export const EmptyCartContainer = styled.View`
  margin: 20px;
  align-items: center;
`

export const EmptyCartTitle = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 35px;
`
