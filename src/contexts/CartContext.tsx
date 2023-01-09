import { createContext, ReactNode, useContext, useState } from 'react'
import produce from 'immer'
import { Coffee } from '../components'

export interface CartItem extends Coffee {
  quantity: number
}

interface ChangeCartItemQuantityProps {
  itemId: number
  type: 'increase' | 'decrease'
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (value: ChangeCartItemQuantityProps) => void
  removeCartItem: (itemId: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  const coffeeExistsInCart = (coffeeId: number) =>
    cartItems.findIndex(({ id }) => id === coffeeId)

  const addCoffeeToCart = (coffee: CartItem) => {
    const coffeeAlreadyExistsInCart = coffeeExistsInCart(coffee.id)

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setItems(newCart)
  }

  const changeCartItemQuantity = ({
    itemId: cartItemId,
    type,
  }: ChangeCartItemQuantityProps) => {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = coffeeExistsInCart(cartItemId)

      if (coffeeAlreadyExistsInCart >= 0) {
        const { quantity } = draft[coffeeAlreadyExistsInCart]
        draft[coffeeAlreadyExistsInCart].quantity =
          type === 'increase' ? quantity + 1 : quantity - 1
      }
    })

    setItems(newCart)
  }

  const removeCartItem = (itemId: number) => {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = coffeeExistsInCart(itemId)

      if (coffeeAlreadyExistsInCart >= 0) {
        draft.splice(coffeeAlreadyExistsInCart, 1)
      }
    })

    setItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}
