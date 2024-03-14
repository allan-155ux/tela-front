import React from 'react'

import './styles.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header-container'>
            <div className='header'>
                <Link to='/'>
                <div className='header-logo'><img height='100%' src={logo} /></div>
                </Link>
                <nav className='header-nav'>
                    <ul>
                        <li><Link to='/'>Início</Link></li>
                        <li><Link to='/colection/pizza'>Pizzas</Link></li>
                        <li><Link to='/colection/hamburger'>Hamburguers</Link></li>
                        <li><Link to='/colection/drink'>Bebidas</Link></li>
                    </ul>
                </nav>
                <div className='header-search'>
                    <div className='header-input'>
                        <input type='text' />
                        <div className='header-search-button'>Go</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header