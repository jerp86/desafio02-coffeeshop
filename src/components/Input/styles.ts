import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors['base-error']};
  }
`
interface InputStyleContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 4.2rem;
  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-input']};
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors['base-error']};
    `}
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 1.2rem;
  padding: 0 1.2rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const RightText = styled.p`
  font-size: ${({ theme }) => theme.textSizes['text-xs']};
  font-style: italic;
  margin-right: 1.2rem;
  color: ${({ theme }) => theme.colors['base-label']};
`
