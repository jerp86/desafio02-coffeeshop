import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import introBackground from './../../../../assets/intro-background.svg'

export const IntroContainer = styled.section`
  width: 100%;
  height: 54.4rem;
  ${({ theme }) => css`
    background: url(${introBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors.white} 0%,
        ${rgba(theme.colors.background, 0.2)} 50%,
        ${theme.colors.background} 100%
      );
    background-size: cover;
  `};
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5.6rem;
`
