import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getCartThunk } from '../../store/slices/cart.slice'
import CartItem from '../CartPages/CartItem'
import config from '../../utils/getConfig'

const Header = () => {

  const [openCloseCart, setOpenCloseCart] = useState(true)

  const { cart, openCart } = useSelector(state => state)

  //  -------------------------------
  const [totalPrice, setTotalPrice] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    const result = cart?.reduce((acc, cv) => acc + cv.quantity * Number(cv.product.price), 0)
    setTotalPrice(result)
  }, [cart])

  const handlePurchase = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url, {}, config)
      .then(res => {
        dispatch(getCartThunk())
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }
  // -------------------------------

  const handleOpen = () => {
    setOpenCloseCart(!openCloseCart)
  }

  useEffect(() => {
  }, [openCart])
  
  const handleBlur = () =>{
    setOpenCloseCart(true)
    console.log('click afuera')
  }

  return (
    <>
      <header className='header_nav'>
        <h1 className='header_logo'>
          <Link to='/'
            className='style logo'
          >e-commerce</Link>
        </h1>
        <nav>
          <ul className='header_icons'>
            <li><Link to='/user/login'>
              <i className='style bx bxs-user'></i></Link></li>
            <li><Link to='/purchases'>
              <i className='style bx bxs-shopping-bags'></i></Link></li>
            {
              // !openCart
              !localStorage.getItem('openCart')
                ?
                <li className='cartIcon_contain'><Link to='/cart'>
                  <i className='style bx bxs-cart'></i>
                </Link>
                  {/* <h1>opt 1</h1> */}
                </li>
                :
                <li
                  className='cartIcon_contain'>
                  <i
                    onClick={handleOpen}
                    className='style bx bxs-cart'>
                  </i>
                  {!cart?.length == 0
                    ?
                    <span className='cart_amount'>{cart?.length} </span>
                    :
                    ''}
                  {/* <h1>opt 2</h1> */}
                </li>
            }
          </ul>
        </nav>
      </header>
      {
        localStorage.getItem('token') &&
        <div 
        onBlur={handleBlur}
        className={`home_cart ${openCloseCart && 'open_modal'}`}>
          <h1>Shopping Cart</h1>
          <div className='cart_items'>
            {
              cart?.map(prodInfo => (
                <CartItem
                  key={prodInfo.id}
                  prodInfo={prodInfo}
                />
              ))
            }
          </div>
          <footer className='cartItem_footer'>
            <h2><span>Total: $</span> <span>{totalPrice} </span> </h2>
          <button 
          className='btn_cart buy'
          onClick={handlePurchase}
          >Buy products</button>
          </footer>
        </div>
      }
    </>
  )
}

export default Header