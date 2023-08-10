import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { useState } from "react"
import { getCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const usePurchases = () => {
    const dispatch = useDispatch()

    //Creamos un estado para almacenar la data del GET
    const [purchases, setPurchases] = useState()

    //POST
    const makeAPurchase = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        axios.post(url, 'Estoy adivinando el Body', getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
            }
            )
            .catch(err => console.log(err))
    }

    //GET
    const getAllPurchase = () => {

        axios.get(url, getConfigToken())
            .then(res => setPurchases(res.data))
            .catch(err => console.log(err))

    }



    return { makeAPurchase, getAllPurchase , purchases }
}



export default usePurchases