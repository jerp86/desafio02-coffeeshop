import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 8rem;

  h1 {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.6rem 3.6rem;
  min-width: 51.2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: -1px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    border-radius: 0.7rem 3.7rem;
  }
`
