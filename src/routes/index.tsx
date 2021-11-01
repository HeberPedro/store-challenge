import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Cart from '../pages/Cart'
import Home from '../pages/Home'

export type RootStackParamList = {
  Home: undefined
  Cart: undefined
}

const App = createStackNavigator<RootStackParamList>()

const Routes = () => (
  <App.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Cart" component={Cart} />
  </App.Navigator>
)

export default Routes
