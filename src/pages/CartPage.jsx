import { useDispatch, useSelector } from "react-redux"

import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"

const CartPage = () => {

    const dispatch = useDispatch()
const cart = useSelector(reducer => reducer.cart)

useEffect(()=>{

    dispatch(getCartThunk())

},[])

console.log(cart)
    return (
        <div>cartPage</div>
    )
}

export default CartPage