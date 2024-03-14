import React from 'react'

import socials from './social.png'

import './styles.css'
import { Outlet } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='footer-container'>
        <div className='footer-icons'>
            <img width="200px" src={socials}/>
        </div>
        <p>© Copyright 2021 - Pizera - Todos os direitos reservados Pizera com Agência de Restaurantes Online S.A.</p>
    </div>
    </>
  )
}

export default Footer