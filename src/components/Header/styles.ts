import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10.4rem;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}
export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-width: 3.68rem;
  height: 3.68rem;
  border-radius: 0.6rem;
  border: none;
  padding: 0 0.8rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes['text-s']};

  ${({ variant, theme }) => css`
    background-color: ${theme.colors[`${variant}-light`]};
    color: ${theme.colors[`${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors.purple};
      }
    `}
`
