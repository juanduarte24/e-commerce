import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"
import ProductInCart from "../components/CartPage/ProductInCart"
import usePurchases from "../hooks/usePurchases"

const CartPage = () => {
    const { makeAPurchase, getAllPurchase, purchases } = usePurchases()

    const dispatch = useDispatch()


    const cart = useSelector(reducer => reducer.cart)

    useEffect(() => {

        dispatch(getCartThunk())

    }, [])

    console.log(cart)

    const totalAmount = cart.reduce((acc, cv) => {
        const subTotal = cv.quantity * cv.product.price
        return acc + subTotal
    }, 0)

    const handleCheckout = () => {
        makeAPurchase()
    }
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
            <footer>
                <span>Total</span>
                <h3>{totalAmount}</h3>
                <button onClick={handleCheckout} style={{ fontSize: '2rem' }}>Checkout</button>
            </footer>
        </section>
    )
}

export default CartPage