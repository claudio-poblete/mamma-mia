import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import '../styles/Cart.css'

const Cart = () => {
  const { cart, removeFromCart } = useContext(GlobalContext)

  return (
    <div className='cart'>
      <h2>Carrito de Compras</h2>
      {cart.length === 0
        ? (
          <p>No hay pizzas en el carrito.</p>
          )
        : (
          <ul>
            {cart.map(pizza => (
              <li key={pizza.id}>
                <img src={pizza.img} alt={pizza.name} />
                <div>
                  <h3>{pizza.name}</h3>
                  <p>{pizza.desc}</p>
                  <p>Precio: ${pizza.price}</p>
                  <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          )}
    </div>
  )
}

export default Cart
