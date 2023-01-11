import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
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
  cartItemsTotal: number
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (value: ChangeCartItemQuantityProps) => void
  removeCartItem: (itemId: number) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedCartItems) return JSON.parse(storedCartItems)

    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce(
    (acc, cur) => (acc += cur.price * cur.quantity),
    0,
  )

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

    setCartItems(newCart)
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

    setCartItems(newCart)
  }

  const removeCartItem = (itemId: number) => {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = coffeeExistsInCart(itemId)

      if (coffeeAlreadyExistsInCart >= 0) {
        draft.splice(coffeeAlreadyExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  const cleanCart = () => setCartItems([])

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsTotal,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
        cleanCart,
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
