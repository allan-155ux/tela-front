import React, { useState } from 'react'

import './styles.css'

import { Link } from 'react-router-dom'

function DashBoardMenu() {

  const [menuIsOpen, setMenuIsOpen] = useState(true)

  return (
    <div>
      {!menuIsOpen &&
        <div onClick={()=>setMenuIsOpen(!menuIsOpen)} className='dashboard-hamburger'>
          Menu
        </div>
      }
      <div className={menuIsOpen ? 'dashboard-menu' : 'dashboard-desatived-menu'}>
        {menuIsOpen &&
          <div onClick={()=>setMenuIsOpen(!menuIsOpen)}>
            close
          </div>
        }
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