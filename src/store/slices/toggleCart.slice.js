import { createSlice } from "@reduxjs/toolkit";

let local = localStorage.getItem('openCart')


const toggleCartSlice = createSlice({
    name:'openCart',
    initialState: local,
    reducers:{
        setOpenCart:(state, action) => action.payload
    }
})

export const { setOpenCart } = toggleCartSlice.actions

export default toggleCartSlice.reducer