import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { addCartG, getCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"


const useCardApi = () => {

    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    
    const dispatch = useDispatch()
    //POST
    const addToCart = (data) => {
        const url = `${baseUrl}/cart`
        axios.post(url, data, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err))

    }
    //DELETE

    return { addToCart }
}

export default useCardApi