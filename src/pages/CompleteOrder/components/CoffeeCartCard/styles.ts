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

export const ActionsContainer = styled.div``

export const RemoveButton = styled.button``
