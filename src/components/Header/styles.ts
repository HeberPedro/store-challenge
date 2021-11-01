import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background-color: #141418;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  margin-right: 5px;
`

export const LogoText = styled.Text`
  color: #fff;
  flex: 1;
  font-weight: bold;
  font-size: 20px;
`

export const CartButton = styled.TouchableOpacity`
  position: relative;
  justify-content: flex-end;
  color: red;
`

export const ItemCount = styled.Text`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  right: -6px;
  top: -6px;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  background: #22b24d;
`
