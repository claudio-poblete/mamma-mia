import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PizzaDetail from './pages/PizzaDetail'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { GlobalProvider } from './contexts/GlobalContext'

function App () {
  return (
    <GlobalProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza/:id' element={<PizzaDetail />} />
        <Route path='/carrito' element={<Cart />} />
      </Routes>
    </GlobalProvider>
  )
}

export default App
