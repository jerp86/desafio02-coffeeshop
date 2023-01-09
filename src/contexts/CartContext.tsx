import { createContext, ReactNode, useContext, useState } from 'react'
import { Coffee } from '../components'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (value: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setItems] = useState<CartItem[]>([])

  const addCoffeeToCart = (coffee: CartItem) => {
    setItems((prev) => [...prev, coffee])
  }

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}
