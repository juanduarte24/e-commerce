import React from 'react'

export const CarProduct = ({ product }) => {
    return (
        <article>
            <header>
                <img src={product.images[0].url} alt="" />
            </header>
            <section>
                <h4>{product.brand}</h4>
                <h3>{product.title}</h3>
                <article>
                    <h3>Price</h3>
                    <span>$ {product.price}</span>
                </article>
                <button><i className='bx bxs-cart'></i></button>
            </section>
        </article>
    )
}
