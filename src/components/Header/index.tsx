import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import coffeeLogo from './../../assets/coffe-delivery-logo.svg'

export const Header = () => (
  <HeaderContainer>
    <div className="container">
      <img src={coffeeLogo} alt="" />

      <HeaderButtonsContainer>
        <HeaderButton variant="purple">
          <MapPin size={20} weight="fill" />
          Botucatu, SP
        </HeaderButton>

        <HeaderButton variant="yellow">
          <ShoppingCart size={20} weight="fill" />
        </HeaderButton>
      </HeaderButtonsContainer>
    </div>
  </HeaderContainer>
)
