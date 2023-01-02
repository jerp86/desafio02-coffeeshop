import { OurCoffee } from '../OurCoffee'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export const Home = () => (
  <HomeContainer>
    <Intro />

    <OurCoffee />
  </HomeContainer>
)
