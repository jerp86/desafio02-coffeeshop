import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10.4rem;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 0;

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
  cursor: inherit;

  span {
    position: absolute;
    top: calc(-2rem / 2);
    right: calc(-2rem / 2);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: ${({ theme }) => theme.textSizes['text-xs']};
  }

  ${({ variant, theme }) => css`
    background-color: ${theme.colors[`${variant}-light`]};
    color: ${theme.colors[`${variant}-dark`]};

    span {
      background-color: ${theme.colors[`${variant}-dark`]};
    }
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors.purple};
      }
    `}
`
