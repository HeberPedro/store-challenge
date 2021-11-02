import '@testing-library/jest-native'

import React from 'react'

import Cart from '../../../pages/Cart'
import { render } from '../../test-utils'

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}))

describe('[PAGE]: Cart', () => {
  it('should be render Cart page', () => {
    render(<Cart />)
  })
})
