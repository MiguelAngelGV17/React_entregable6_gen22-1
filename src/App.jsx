import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import CartPage from './components/CartPages/CartPage'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PurchasesPage from './pages/PurchasesPage'
import RegisterPage from './pages/RegisterPage'
import { getCartThunk } from './store/slices/cart.slice'
import { getAllProductsThunk } from './store/slices/products.slice'
import CartItem from './components/CartPages/CartItem'

function App() {

  const dispatch = useDispatch()
  const { cart } = useSelector(state => state)

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/user'>
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
        {/* Protected routes*/}
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<CartItem/>}/>
          <Route path='/purchases' element={<PurchasesPage />}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
