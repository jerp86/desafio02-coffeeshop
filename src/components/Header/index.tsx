import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import coffeeLogo from './../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

export const Header = () => {
  const { cartQuantity } = useCart()

  return (
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
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
