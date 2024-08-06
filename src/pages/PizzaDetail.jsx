import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/PizzaDetail.css'
import pizzaData from '../database/pizzas.json'

const PizzaDetail = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    const pizza = pizzaData.find(p => p.id === id)
    setPizza(pizza)
  }, [id])

  if (!pizza) {
    return <div>Loading...</div>
  }

  return (
    <div className='pizza-detail'>
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={`${pizza.id}-${index}`}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
    </div>
  )
}

export default PizzaDetail
