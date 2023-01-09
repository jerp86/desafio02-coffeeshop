import { OurCoffee } from './components/OurCoffee'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export const Home = () => (
  <HomeContainer>
    <Intro />

    <OurCoffee />
  </HomeContainer>
)
