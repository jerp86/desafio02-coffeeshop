import { CoffeeCard, TitleText } from '../../components'
import { CoffeeList, OurCoffeeContainer } from './styles'

export const OurCoffee = () => (
  <OurCoffeeContainer className="container">
    <TitleText size="l" color="subtitle">
      Nossos Cafés
    </TitleText>

    <CoffeeList>
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
    </CoffeeList>
  </OurCoffeeContainer>
)
