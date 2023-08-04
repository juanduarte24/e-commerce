import React from 'react'
import { useSelector } from 'react-redux'
import { CarProduct } from '../components/HomePage/CarProduct'

const HomePages = () => {
  const products = useSelector(reducer => reducer.products)

  console.log(products)
  return (
    <div>
      <div>
        {
          products?.map(prod => (
            <CarProduct 
            key={prod.id}
            product={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomePages