import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { ProductInfo } from '../components/ProductIdPage/ProductInfo'
import SimiliarProducts from '../components/ProductIdPage/SimiliarProducts'

const ProductIdPages = () => {

    const { id } = useParams()

    const [product, getSingleProduct] = useFetch()

    useEffect(() => {
        getSingleProduct(`/products/${id}`)
    }, [id])


    return (
        <div>
            <ProductInfo
                product={product}
            />
            <SimiliarProducts
                product={product}
            />s
        </div>
    )
}

export default ProductIdPages