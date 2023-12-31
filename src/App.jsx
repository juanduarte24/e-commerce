import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './pages/HomePage'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import  {Header}  from './components/shared/Header'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProductIdPages from './pages/ProductIdPages'
import CartPage from './pages/CartPage'

function App() {


  const dispatch = useDispatch()
  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    dispatch(getAllProductsThunk(url))

  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/register' element={ <RegisterPage/>} />
        <Route path='/login' element={<LoginPage/> } />
        <Route path='/product/:id' element={<ProductIdPages/>}/>
        <Route path='/cart' element={<CartPage/>} />
      </Routes>


    </div>
  )
}

export default App
