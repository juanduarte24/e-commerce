import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProductsG: (state  , action) => action.payload
    }
})


export const {setProductsG} = productsSlice.actions

export default productsSlice.reducer

export const getAllProductsThunk = url =>  dispatch =>{
    
    axios.get(url)
    .then(res => dispatch(setProductsG(res.data)))
    .catch(err => console.log(err))

}