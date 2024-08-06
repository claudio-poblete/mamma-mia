import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (pizza) => {
    setCart([...cart, pizza])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(pizza => pizza.id !== id))
  }

  return (
    <GlobalContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </GlobalContext.Provider>
  )
}
