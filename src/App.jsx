import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './pages/HomePage'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import { Header } from './components/shared/Header'

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
      </Routes>


    </div>
  )
}

export default App
