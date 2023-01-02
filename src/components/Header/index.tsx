import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import coffeeLogo from './../../assets/coffe-delivery-logo.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => (
  <HeaderContainer>
    <div className="container">
      <NavLink to="/">
        <img src={coffeeLogo} alt="" />
      </NavLink>

      <HeaderButtonsContainer>
        <HeaderButton variant="purple">
          <MapPin size={20} weight="fill" />
          Botucatu, SP
        </HeaderButton>

        <NavLink to="/completeOrder">
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </NavLink>
      </HeaderButtonsContainer>
    </div>
  </HeaderContainer>
)
