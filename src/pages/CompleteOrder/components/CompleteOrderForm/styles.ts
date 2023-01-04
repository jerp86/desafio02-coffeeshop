import styled from 'styled-components'
import { SectionBaseStyle } from '../../style'

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 64rem;
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20rem 28rem 6rem;
  column-gap: 1.2rem;
  row-gap: 1.6rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 20rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
`
