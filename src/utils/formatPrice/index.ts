import numeral from 'numeral'
import 'numeral/locales/pt-br'

numeral.locale('pt-br')

export const formatPrice = (num: number) =>
  `R$ ${numeral(num).format('0,0.00')}`
