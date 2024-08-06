import { Link } from 'react-router-dom'
import '../styles/PizzaCard.css'

const PizzaCard = ({ pizza }) => {
  return (
    <div className='pizza-card'>
      <img src={pizza.img} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.desc}</p>
      <Link to={`/pizza/${pizza.id}`} className='button'>Ver Detalles</Link>
    </div>
  )
}

export default PizzaCard
