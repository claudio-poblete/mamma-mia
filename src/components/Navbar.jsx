import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>Mamma Mia!</Link>
      <div className='navbar-links'>
        <Link to='/'>Home</Link>
        <Link to='/carrito'>Carrito</Link>
      </div>
    </nav>
  )
}

export default Navbar
