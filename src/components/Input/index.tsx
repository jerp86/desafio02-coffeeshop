import { InputHTMLAttributes } from 'react'
import { InputStyleContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ ...props }: InputProps) => (
  <InputStyleContainer {...props} />
)
