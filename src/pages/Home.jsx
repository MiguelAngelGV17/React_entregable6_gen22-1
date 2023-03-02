import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import { getProductsByName } from '../store/slices/products.slice'

const Home = () => {

  const [categories, setCategories] = useState()

  const { products } = useSelector(state => state)

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const input = e.target.inputSearch.value.trim().toLowerCase()
    dispatch(getProductsByName(input, false))
  }

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
    axios.get(url)
    .then(res => setCategories(res.data))
    .catch(err => console.log(err))
  }, [])
  
  const handleClickCategory = id => {
    dispatch(getProductsByName(id, true))
  }

  return (
    <div className='home'>
      <form onSubmit={handleSubmit}>
        <input type="text" id='inputSearch' />
        <button>
          <i className='bx bx-search-alt-2'></i>
        </button>
      </form>

      <article>
      <h3>Category</h3>
        <i className='bx bx-chevron-down'></i>
        <ul>
          {
            categories?.map(category => (
              <li
              onClick={() =>handleClickCategory(category.id)}
              key={category.id}
              >{category.name}</li>
            ))
          }
        </ul>
      </article>

      <div className='home_cardProduct'>
        {
          products?.length === 0 ? 
          <h1>This product does't exist</h1> //pendiente
          :
          products?.map(product => (
            <CardProduct
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home