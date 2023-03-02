import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import './styles/cardProduct.css'

const CardProduct = ({ product }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleBtnClick = e => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

    const data = {
      quantity: 1,
      productId: product.id
    }

    axios.post(url, data, config)
    .then(res => {
      dispatch(getCartThunk())
      console.log(res.data)
    })
    .catch(err => console.log(err.response))
    e.stopPropagation()
  }

  return (
    <article 
    className='cardProduct_container'
    onClick={handleClick} >
      <header >
        <div className='cardProduct_container_img'>
        <img 
        className='cardProduct_img'
        src={product.images[0].url} alt="" />
        </div>
        <section className='cardProduct_info'>
            <h3 className='cardProduct_brand'>{product.brand}</h3>
            <h2 className='cardProduct_title'>{product.title}</h2>
            <h3 className='cP_price'>Price</h3>
            <h2 className='cP_value'>{product.price}</h2>
          <button 
          className='cardProduct_btn_cart'
          onClick={handleBtnClick}
          >
            <i className='bx bx-cart '></i>
          </button>
        </section>
      </header>
    </article>
  )
}

export default CardProduct