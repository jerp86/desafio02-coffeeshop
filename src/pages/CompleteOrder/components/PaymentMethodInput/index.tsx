import { CreditCard } from 'phosphor-react'
import { PaymentMethodContainer } from './styles'

export const PaymentMethodInput = () => (
  <PaymentMethodContainer>
    <CreditCard size={16} />
    Cartão de Crédito
  </PaymentMethodContainer>
)
