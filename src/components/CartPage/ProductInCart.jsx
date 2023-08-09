import React from 'react'
import useCardApi from '../../hooks/useCardApi'

const ProductInCart = ({ prodCart }) => {

    const { deleteProductInCart } = useCardApi()
    const handleDeleteProduct = () => {
        deleteProductInCart(prodCart.id)
    }

    return (
        <article>
            <header>
                <img src={prodCart?.product.images[0].url} alt="" />
            </header>
            <section>
                <h3>{prodCart.product.title}</h3>
                <span>{prodCart.quantity}</span>
                <button onClick={handleDeleteProduct}><i className='bx bxs-trash'></i></button>
            </section>
            <footer>
                <span>Subtotal : </span>
                <span>$ {prodCart.product.price * prodCart.quantity} </span>

            </footer>
        </article>
    )
}

export default ProductInCart