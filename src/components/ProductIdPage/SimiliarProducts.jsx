import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { CarProduct } from "../HomePage/CarProduct"

const SimiliarProducts = ({ product }) => {

    const [productByCategory, getProductsByCategory] = useFetch()

    useEffect(() => {
        if (product) {

            getProductsByCategory(`/products?categoryId=${product.categoryId}`)
        }

    }, [product])
    const cbFilter = prod => {
        if (prod.id !== product.id) {
            return prod
        }
    }

    // console.log(productByCategory);

    return (
        <div>
            <h3>Similar Products</h3>
            <div>
                {
                    productByCategory?.filter(cbFilter).map(prod => (
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

export default SimiliarProducts