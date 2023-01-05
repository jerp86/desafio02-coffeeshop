import { TitleText } from '../../../../components'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export const SelectedCoffees = () => (
  <SelectedCoffeesContainer>
    <TitleText>Cafés selecionados</TitleText>

    <DetailsContainer>
      <CoffeeCartCard />
      <CoffeeCartCard />
      <CoffeeCartCard />

      <ConfirmationSection />
    </DetailsContainer>
  </SelectedCoffeesContainer>
)
