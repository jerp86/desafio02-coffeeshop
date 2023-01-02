import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border-radius: 0.6rem;
  padding: 0.8rem;

  input {
    width: 100%;
    text-align: center;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors['base-title']};

    &:focus {
      outline: none;
    }
  }
`

export const IconWrapper = styled.button.attrs({ type: 'button' })`
  width: 1.4rem;
  height: 1.4rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.purple};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`
