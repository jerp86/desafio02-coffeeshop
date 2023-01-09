import { Trash } from 'phosphor-react'
import { QuantityInput, RegularText } from '../../../../components'
import { CartItem, useCart } from '../../../../contexts/CartContext'
import { formatNumber } from '../../../../utils/formatNumber'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export const CoffeeCartCard = ({ coffee }: CoffeeCartCardProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatNumber(coffeeTotal)

  const handleDecrease = () =>
    changeCartItemQuantity({ itemId: coffee.id, type: 'decrease' })

  const handleIncrease = () =>
    changeCartItemQuantity({ itemId: coffee.id, type: 'increase' })

  const handleRemove = () => removeCartItem(coffee.id)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt={coffee.name} />

        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
