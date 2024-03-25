import React from 'react'

import './styles.css'

import { Link } from 'react-router-dom'

function DashBoardMenu({ menuIsOpen, setMenuIsOpen }) {

  return (
    <div>
      <div className='dashboard-menu'>
        <h1>Dashboard</h1>
        <ul>
          <Link to='products'><li>Produtos</li></Link>
          <Link to='colections'><li>Coleções</li></Link>
        </ul>
      </div>

    </div>
  )
}

export default DashBoardMenu