import { TitleText } from '../../../../components'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export const SelectedCoffees = () => (
  <SelectedCoffeesContainer>
    <TitleText>Cafés selecionados</TitleText>

    <DetailsContainer>
      <CoffeeCartCard />
      <CoffeeCartCard />
      <CoffeeCartCard />
    </DetailsContainer>
  </SelectedCoffeesContainer>
)
