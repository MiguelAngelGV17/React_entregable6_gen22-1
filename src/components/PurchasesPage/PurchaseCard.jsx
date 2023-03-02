import React from 'react'
import './styles/purchase.css'

const PurchaseCard = ({purchase}) => {
  return (
    <article className='o'>
      <div className='purchase_container'>
        <div >
            <img className='purchase_img' src={purchase.product.images[0].url} alt="" />
        </div>
        <h3>{purchase.product.title}</h3>
        <div>{purchase.quantity}</div>
        <div>{purchase.product.price}</div>
      </div>
    </article>
  )
}

export default PurchaseCard