import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import './styles/cartPage.css'

const CartPage = () => {

  // const { cart } = useSelector(state => state)

  // const [totalPrice, setTotalPrice] = useState(0)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const result = cart?.reduce((acc, cv) => acc + cv.quantity * Number(cv.product.price), 0)
  //   setTotalPrice(result)
  // }, [cart])

  // const handlePurchase = () => {
  //   const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
  //   axios.post(url, {}, config)
  //     .then(res => {
  //       dispatch(getCartThunk())
  //       console.log(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }

  return (
    <div >
      {/* <div className='cart_items'>
        {
          cart?.map(prodInfo => (
            <CartItem
              key={prodInfo.id}
              prodInfo={prodInfo}
            />
          ))
        }
      </div>
      <footer>
        <h2><span>Total: </span> <span>{totalPrice} </span> </h2>
      </footer>
      <button onClick={handlePurchase}>Buy products</button> */}
    </div>
  )
}

export default CartPage