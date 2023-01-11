import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptionsContainer } from './styles'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'dinheiro',
    icon: <Money size={16} />,
  },
}

export const PaymentMethodOptions = () => {
  const { register } = useFormContext()

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={key}
          icon={icon}
          label={label}
          value={key}
          id={key}
          {...register('paymentMethod')}
        />
      ))}
    </PaymentMethodOptionsContainer>
  )
}
