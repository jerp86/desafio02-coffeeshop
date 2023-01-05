import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      width: 6.4rem;
      height: 6.4rem;
    }
  }

  > p {
    font-weight: 700;
    align-self: flex-start;
  }
`

export const ActionsContainer = styled.div`
  margin-top: 0.8rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > div {
    max-width: 7.2rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.textSizes['text-xs']};
  height: 100%;
  padding: 0 0.8rem;
  border: none;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 0.6rem;
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`
