import React, { memo } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../../routes'
import * as S from './styles'

type HeaderComponentProp = StackNavigationProp<
  RootStackParamList,
  'Home' | 'Cart'
>

const Header = () => {
  const { navigate } = useNavigation<HeaderComponentProp>()

  return (
    <S.Container>
      <S.LogoContainer onPress={() => navigate('Home')}>
        <S.LogoText>STORE</S.LogoText>
      </S.LogoContainer>

      <S.CartButton onPress={() => navigate('Cart')}>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <S.ItemCount>0</S.ItemCount>
      </S.CartButton>
    </S.Container>
  )
}

export default memo(Header)
