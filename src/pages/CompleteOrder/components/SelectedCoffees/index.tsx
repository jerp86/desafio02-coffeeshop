import { TitleText } from '../../../../components'
import { useCart } from '../../../../contexts/CartContext'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

export const SelectedCoffees = () => {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <TitleText>Cafés selecionados</TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
