import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../../routes'
import { StoreState } from '../../store/createStore'
import * as S from './styles'

type HeaderComponentProp = StackNavigationProp<
  RootStackParamList,
  'Home' | 'Cart'
>

const Header = () => {
  const { navigate } = useNavigation<HeaderComponentProp>()

  const cartSize = useSelector((state: StoreState) => state.cart.length)

  return (
    <S.Container>
      <S.LogoContainer onPress={() => navigate('Home')}>
        <S.LogoText>STORE</S.LogoText>
      </S.LogoContainer>

      <S.CartButton onPress={() => navigate('Cart')}>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <S.ItemCount testID="cart-size">{cartSize}</S.ItemCount>
      </S.CartButton>
    </S.Container>
  )
}

export default memo(Header)
