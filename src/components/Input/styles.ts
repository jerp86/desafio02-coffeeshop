import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors['base-error']};
  }
`

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  display: flex;
  align-items: center;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 1.2rem;
  padding: 0 1.2rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
