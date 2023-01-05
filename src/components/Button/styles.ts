import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 1.2rem 4.4rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.textSizes['text-s']};
  line-height: 140%;
  text-transform: uppercase;
  border: none;
  border-radius: 0.6rem;
  transition: 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
