import { forwardRef, InputHTMLAttributes } from 'react'
import { RegularText } from '../Typography'
import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RightText,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, rightText, ...props }, ref) => (
    <InputWrapper className={className}>
      <InputStyleContainer hasError={!!error}>
        <InputStyled {...props} ref={ref} />
        {rightText && <RightText>{rightText}</RightText>}
      </InputStyleContainer>
      {error && <RegularText size="s">{error}</RegularText>}
    </InputWrapper>
  ),
)
