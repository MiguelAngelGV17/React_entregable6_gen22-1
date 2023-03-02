import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'

const ProductInfo = ({ product }) => {

  const dispatch = useDispatch()

  const [counter, setCounter] = useState(1)

  const handleAdd = () => {
    setCounter(counter + 1)
  }
  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1)
    }
  }
  const handleAddCart = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    
    const data = {
      quantity: counter,
      productId: product.id
    }

    axios.post(url, data, config)
      .then(res => {
        dispatch(getCartThunk())
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <article>
      <h3>{product?.brand}</h3>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer>
        <section>
          <h4>Price</h4>
          <span>{product?.price}</span>
        </section>
        <section>
          <h4>Quantity</h4>
          <div>
            <button onClick={handleMinus}>-</button>
            <span >{counter}</span>
            <button onClick={handleAdd}>+</button>
          </div>
          <button onClick={handleAddCart}>Add to cart <i className='bx bx-cart'></i></button>
        </section>
      </footer>
    </article>
  )
}

export default ProductInfo