import { createContext, ReactNode, useContext, useState } from 'react'
import produce from 'immer'
import { Coffee } from '../components'

export interface CartItem extends Coffee {
  quantity: number
}

interface ChangeCartItemQuantityProps {
  cartItemId: number
  type: 'increase' | 'decrease'
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (value: CartItem) => void
  changeCartItemQuantity: (value: ChangeCartItemQuantityProps) => void
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
    cartItemId,
    type,
  }: ChangeCartItemQuantityProps) => {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = coffeeExistsInCart(cartItemId)

      if (coffeeAlreadyExistsInCart >= 0) {
        const item = draft[coffeeAlreadyExistsInCart]
        item.quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
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
