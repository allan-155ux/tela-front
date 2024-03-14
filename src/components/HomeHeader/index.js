import React from 'react'

import './styles.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'

function HomeHeader() {
    return (
        <div className='home-header-container'>
            <div className='home-header'>
                <div className='home-header-logo'><img height='100%' src={logo} /></div>
                <nav className='home-header-nav'>
                    <ul>
                    <li><Link to='/'>Início</Link></li>
                        <li><Link to='/colection/pizza'>Pizzas</Link></li>
                        <li><Link to='/colection/hamburger'>Hamburguers</Link></li>
                        <li><Link to='/colection/drink'>Bebidas</Link></li>
                    </ul>
                </nav>
                <div className='home-header-search'>
                    <div className='home-header-input'>
                        <input type='text' />
                        <div className='home-header-search-button'>Go</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader