import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles'
import introImg from './../../../../assets/intro-img.png'
import { RegularText } from '../../../../components'

export const Intro = () => (
  <IntroContainer>
    <IntroContent className="container">
      <div>
        <section>
          <IntroTitle size="xl">
            Encontre o café perfeito para qualquer hora do dia
          </IntroTitle>

          <RegularText>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </RegularText>
        </section>

        <BenefitsContainer>
          <p>beneficio</p>
          <p>beneficio</p>
          <p>beneficio</p>
          <p>beneficio</p>
        </BenefitsContainer>
      </div>
      <img src={introImg} alt="" />
    </IntroContent>
  </IntroContainer>
)
