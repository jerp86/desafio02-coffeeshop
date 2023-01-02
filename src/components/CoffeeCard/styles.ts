import styled from 'styled-components'
import { RegularText, TitleText } from '../Typography'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 0.6rem 3.6rem;
  padding: 2rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 12rem;
    height: 12rem;
    margin-top: -2rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1.6rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  span {
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['text-xs2']};
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
  }
`

export const Name = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
  weight: 700,
})`
  margin-bottom: 0.8rem;
`

export const Description = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  margin-bottom: 3.2rem;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    p {
      line-height: 1.2rem;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 12rem;

  > button {
    width: 3.8rem;
    height: 3.8rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors['purple-dark']};
    color: ${({ theme }) => theme.colors['base-card']};
    border-radius: 0.6rem;
    margin-left: 0.4rem;
    transition: 0.4s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
    }
  }
`
