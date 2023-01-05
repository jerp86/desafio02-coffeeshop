import { Button, RegularText } from '../../../../components'
import { ConfirmationSectionContainer } from './styles'

export const ConfirmationSection = () => (
  <ConfirmationSectionContainer>
    <div>
      <RegularText size="s">Total de itens</RegularText>
      <RegularText>R$ 9,90</RegularText>
    </div>

    <div>
      <RegularText size="s">Entrega</RegularText>
      <RegularText>R$ 3,50</RegularText>
    </div>

    <div>
      <RegularText size="l" weight={700} color="subtitle">
        Total de itens
      </RegularText>
      <RegularText size="l" weight={700} color="subtitle">
        R$ 29,90
      </RegularText>
    </div>

    <Button text="confirmar pedido" />
  </ConfirmationSectionContainer>
)
