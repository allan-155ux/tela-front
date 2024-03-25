import React, { useState } from 'react'
import axios from 'axios';

import './styles.css';

import del from './delete.png'
import edit from './edit.png'
import FormProduct from '../FormProduct';

function DashboardProductsItem({ product }) {

  const [isOpen, setIsOpen] = useState(false)

  const delProduct = async () => {
    
    await axios.delete(`${process.env.REACT_APP_API_URL}/product/${product.id}`)
    window.location.reload()
  }

  return (
    <div className='dashboard-products-item'>
      <div className='dashboard-products-item-header'>
        <div className='dashboard-products-item-tittle' >
          <h1>R${product.price}</h1><p>{product.title}</p>
        </div>
        <div className='dashboard-products-item-icons'>
          <img style={{marginRight: '10px'}} onClick={() => setIsOpen(!isOpen)} height='20px' src={edit} alt='edit' />
          <img onClick={delProduct} height='20px' src={del} alt='delete' />
        </div>
      </div>
      {isOpen &&
        <FormProduct product={product}/>
      }
    </div>
  )
}

export default DashboardProductsItem