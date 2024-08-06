import { useEffect, useState } from 'react'
import PizzaCard from '../components/PizzaCard'
import '../styles/Home.css'
import pizzaData from '../database/pizzas.json'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    setPizzas(pizzaData)
  }, [])

  return (
    <div className='home'>
      {pizzas.map(pizza => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  )
}

export default Home
