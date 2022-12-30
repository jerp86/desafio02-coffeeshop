import styled from 'styled-components'

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
