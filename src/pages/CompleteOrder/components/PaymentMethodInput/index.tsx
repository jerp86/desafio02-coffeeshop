import { InputHTMLAttributes, ReactNode } from 'react'
import { ContentContainer, PaymentMethodContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = ({
  id,
  icon,
  label,
  ...props
}: PaymentMethodInputProps) => (
  <PaymentMethodContainer>
    <input type="radio" id={id} name="paymentMethod" {...props} />
    <label htmlFor={id}>
      <ContentContainer>
        {icon}
        {label}
      </ContentContainer>
    </label>
  </PaymentMethodContainer>
)
