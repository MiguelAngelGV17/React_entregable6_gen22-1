import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import cart from './slices/cart.slice'
import openCart from './slices/toggleCart.slice'

export default configureStore({
    reducer:{
        products,
        cart,
        openCart
    }
})