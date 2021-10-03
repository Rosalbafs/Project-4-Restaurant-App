import React, { useState, useEffect } from 'react'
import Product from './Product'
import axios from 'axios'

const getProducts = () => {
  return axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log('res', response)
      return response.data.map(item => (
        {
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price
        }
      ))
    })
}

const Menu = () => {
  const [productsState, setProductsState] = useState([])

  useEffect(() => {
    getProducts().then(products => setProductsState(products))
  }, [])

  return (
    <div>
      {
        productsState.map(product => <Product item={product} key={product.id} />)
      }
    </div>
  )
}

export default Menu