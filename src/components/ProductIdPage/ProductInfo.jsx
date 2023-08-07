import React, { useState } from 'react'

export const ProductInfo = ({ product }) => {

    const [counter, setCounter] = useState(1)

const handlePlus = ()=>{
    setCounter(counter+1)

}

const handleMinus = ()=>{
    if (counter -1 > 1 ){
        setCounter(counter-1)
    
}
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
                <button>Add to Cart <i className='bx bxs-cart'></i></button>
            </footer>

        </article>
    )
}
