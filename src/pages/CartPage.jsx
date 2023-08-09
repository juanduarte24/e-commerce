import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"
import ProductInCart from "../components/CartPage/ProductInCart"

const CartPage = () => {

    const dispatch = useDispatch()


    const cart = useSelector(reducer => reducer.cart)

    useEffect(() => {

        dispatch(getCartThunk())

    }, [])

    console.log(cart)
    return (
        <section>
            <h2>Cart</h2>
            <div>
            {
                cart.map(prod => (
                    <ProductInCart 
                    key={prod.id}
                    prodCart={prod}
                    />
                ))
            }
            </div>
        </section>
    )
}

export default CartPage