import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import './styles/cartItem.css'

const CartItem = ({ prodInfo }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`
    axios.delete(url, config)
      .then(res => {
        dispatch(getCartThunk())
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <article className='cartItem_container'>
      <div className='cartItem_container_img'>
        <img
          className='cartItem_img'
          src={prodInfo?.product?.images[0].url} alt="" />
      </div>
      <div className='cartItem_info'>
        {/* <h4 className='cartItem_brand'>{prodInfo?.product.brand}</h4> */}
        <h4 className='cartItem_title'>{prodInfo?.product.title}</h4>
        <ul>
          <li>
            <span className='cartItem_price'>Unit Price: $ </span>
            <span>{prodInfo?.product.price}</span>
          </li>
          <li>
            <span>Quantity ➡ </span>
            <span>{prodInfo?.quantity}</span>
          </li>
        </ul>
      </div>
      <button 
      className='btn_cart delete'
      onClick={handleDelete}
      >
        <i className='bx bx-trash'></i>
      </button>
    </article>
  )
}

export default CartItem