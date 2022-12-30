import { HeaderContainer } from './styles'
import coffeeLogo from './../../assets/coffe-delivery-logo.svg'

export const Header = () => (
  <HeaderContainer>
    <div className="container">
      <img src={coffeeLogo} alt="" />
    </div>
  </HeaderContainer>
)
