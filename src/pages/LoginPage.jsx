import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartThunk } from '../store/slices/cart.slice'
import { setOpenCart } from '../store/slices/toggleCart.slice'
import defaultValues from '../utils/defaultValues'
import './styles/login.css'

const LoginPage = () => {

  const [token, setToken] = useState(null)

  const { register, handleSubmit, reset } = useForm()

  const { openCart } = useSelector(state => state)

  const dispatch = useDispatch()

  const submit = data => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users/login`
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        setToken(res.data.token)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('name', `${res.data.user.firstName} ${res.data.user.lastName}`)
        localStorage.setItem('openCart', true)
        dispatch(setOpenCart(true))
        // dispatch(getCartThunk())
      })
      .catch(err => {
        console.log(err)
        localStorage.clear()
      })
      reset(defaultValues)
    }
    
    const handleClick = () => {
      localStorage.clear()
      setToken()
      localStorage.setItem('openCart', '')
      dispatch(setOpenCart(false))
  }

  if (localStorage.getItem('name')) {
    return (
      <div className='logIn_container'>
        <h2>{localStorage.getItem('name')}</h2>
        <button onClick={handleClick}>
          <Link to='/user/login'></Link>
          Log out
        </button>
      </div>
    )
  } else {
    return (
      <div className='logIn_container'>
        <h3 className='logIn_greeting'>Welcome! Enter your email and password to continue</h3>
        <p className='logIn_suggestion'>You have to Log in to access to your cart</p>
        <div className='logIn_example'>
          <h3 className='example_title'>Test data</h3>
          <li><i className='bx bx-envelope'></i> juan@gmail.com</li>
          <li><i className='bx bx-lock-alt'></i> juan12345</li>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className='logIn_form'>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" className='input' />
          </div>
          <div className='logIn_form'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password"
              className='input' />
          </div>
          <button className='logIn_button'>Login</button>
        </form>
        <span>Don't have an account?</span>
        <Link to='/user/register'>Sing up now</Link>
      </div>
    )
  }
}

export default LoginPage