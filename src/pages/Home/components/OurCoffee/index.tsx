import { CoffeeCard, TitleText } from '../../../../components'
import { coffees } from '../../../../data/coffees'
import { CoffeeList, OurCoffeeContainer } from './styles'

export const OurCoffee = () => (
  <OurCoffeeContainer className="container">
    <TitleText size="l" color="subtitle">
      Nossos Cafés
    </TitleText>

    <CoffeeList>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </CoffeeList>
  </OurCoffeeContainer>
)
