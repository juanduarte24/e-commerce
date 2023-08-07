import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/CardProducts.css'

export const CarProduct = ({ product }) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/product/${product.id}`)

    }

    const handleAddCart = e => {
        e.stopPropagation()
    }
    return (
        <article className='card' onClick={handleNavigate}>
            <header className='card-header'>
                <img className='card-img card-img1' src={product.images[0].url} alt="" />
                <img className='card-img card-img2' src={product.images[1].url} alt="" />
            </header>
            <section className='card-body'>
                <header className='card-body-header'>

                    <h4 className='card-brand'>{product.brand}</h4>
                    <h3 className='card-name'>{product.title}</h3>
                </header>
                <article className='card-price'>
                    <h3 className='card-price-label'>Price</h3>
                    <span className='card-price-value'>{product.price}</span>
                </article>
                <button className='card-button' onClick={handleAddCart}><i className='bx bxs-cart card-icon'></i></button>
            </section>
        </article>
    )
}
