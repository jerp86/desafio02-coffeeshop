import styled from 'styled-components'

export const LayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 112rem;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 768px) {
      padding-left: 1.6rem;
      padding-right: 1.6rem;
    }
  }
`
