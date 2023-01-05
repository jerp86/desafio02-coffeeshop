import styled from 'styled-components'
import { SectionBaseStyle } from '../../style'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 64rem;
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 0.6rem 4.4rem;
  display: flex;
  flex-direction: column;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
