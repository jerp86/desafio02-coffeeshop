import { Button, RegularText } from '../../../../components'
import { useCart } from '../../../../contexts/CartContext'
import { formatNumber } from '../../../../utils/formatNumber'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export const ConfirmationSection = () => {
  const { cartItemsTotal, cartQuantity } = useCart()

  const cartTotal = cartQuantity > 0 ? DELIVERY_PRICE + cartItemsTotal : 0
  const formattedItemsTotal = formatNumber(cartItemsTotal)
  const formattedCartTotal = formatNumber(cartTotal)
  const formattedDeliveryPrice = formatNumber(cartQuantity ? DELIVERY_PRICE : 0)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>

      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>

      <div>
        <RegularText size="l" weight={700} color="subtitle">
          Total de itens
        </RegularText>
        <RegularText size="l" weight={700} color="subtitle">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button
        text="confirmar pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
