import React, { useEffect, useState } from 'react'

import Product from '../Product'

import './styles.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductList({setColection}) {

  const [products, setProducts] = useState([])

  const params = useParams()

  const { colection } = params

  
  useEffect(() => {
    if(setColection){
      axios.get(`${process.env.REACT_APP_API_URL}/products/tag/${setColection}`).then((response) => {
        setProducts(response.data)
      })
    } else{
      axios.get(`${process.env.REACT_APP_API_URL}/products/tag/${colection}`).then((response) => {
        setProducts(response.data)
      })
    }
  }, [colection, setColection])

  return (
    <div className='productlist-container'>
      {products &&
      products.map((product)=>{
        return(
          <Product price={product.price} id={product.id} tittle={product.title} description={product.subtitle} src={product.url} />
        )
      })}
    </div>
  )
}

export default ProductList