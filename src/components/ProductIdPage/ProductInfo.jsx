import React, { useState } from 'react'
import useCardApi from '../../hooks/useCardApi'
import { useDispatch } from "react-redux"


export const ProductInfo = ({ product }) => {
    const [counter, setCounter] = useState(1)

    const dispatch = useDispatch()
    const { addToCart } = useCardApi()

    const handlePlus = () => setCounter(counter + 1)

    const handleMinus = () => {
        if (counter - 1 >= 0) {
            setCounter(counter - 1)

        }
    }

    const handleAddToCart = () => {
        const data = {
            quantity : counter,
            productId : product.id
        }
       addToCart(data)
    }


    return (
        <article>
            <h4>{product?.brand}</h4>
            <h3>{product?.title}</h3>
            <p>{product?.description}</p>
            <section>
                <h4>Price</h4>
                <span>{product?.price}</span>
            </section>
            <section>
                <h4>Quantity</h4>
                <div>
                    <button onClick={handlePlus}>+</button>
                    <span>{counter}</span>
                    <button onClick={handleMinus}>-</button>
                </div>
            </section>
            <footer>
                <button onClick={handleAddToCart}>Add to Cart <i className='bx bxs-cart'></i></button>
            </footer>

        </article>
    )
}
