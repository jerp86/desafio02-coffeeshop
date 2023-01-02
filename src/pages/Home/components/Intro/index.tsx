import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles'
import introImg from './../../../../assets/intro-img.png'
import { InfoWithIcon, RegularText } from '../../../../components'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export const Intro = () => {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>

            <RegularText>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors['yellow-dark']}
              text="Compra simples e segura"
            />

            <InfoWithIcon
              icon={<Package weight="fill" />}
              iconBg={colors['base-text']}
              text="Embalagem mantém o café intacto"
            />

            <InfoWithIcon
              icon={<Timer weight="fill" />}
              iconBg={colors.yellow}
              text="Entrega rápida e rastreada"
            />

            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              iconBg={colors.purple}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>
        <img src={introImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
