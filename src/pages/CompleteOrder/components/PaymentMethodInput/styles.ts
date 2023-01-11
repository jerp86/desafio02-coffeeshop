import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background-color: ${theme.colors['purple-light']};
      border-color: ${theme.colors.purple};

      &:hover {
        background-color: ${theme.colors['purple-light']};
        opacity: 0.7;
      }
    `}
  }
`

export const ContentContainer = styled.div`
  padding: 0 1.6rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  font-size: ${({ theme }) => theme.textSizes['text-xs']};
  text-transform: uppercase;
  border-radius: 0.6rem;
  height: 4.8rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  user-select: none;
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`
