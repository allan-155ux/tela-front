import React, { useState } from 'react'

import './styles.css'

import icon from './buys.png'

import { useCart } from '../../contexts/cartContext'
import { Link } from 'react-router-dom'

function Cart() {


    const { removeFromCart } = useCart()
    const { isOpen } = useCart()
    const { setIsOpen } = useCart()
    const { cartItems } = useCart()
    const { getTotal } = useCart()

    let total = getTotal()

    return (
        <div className={isOpen ? "active-cart-container" : "cart-container"}>
            {isOpen &&
                <div className='cart-main'>
                    {cartItems &&
                        cartItems.map((e, i) => {
                            return (
                                <div className='cart-item'>
                                    <div className='cart-item-tittle'>
                                        <h1>{e.title}</h1>
                                        <h2>{e.subtitle}</h2>
                                    </div>
                                    <div>
                                        <h3>R${e.lastprice}</h3>
                                        <h1>R${e.price}</h1>
                                    </div>
                                    <div onClick={() => removeFromCart(i)} className='cart-item-close'>
                                        x
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='cart-total'>
                        <div className='cart-item'>
                            <h1>Frete: R$ 00,00</h1>
                            <br />
                            <h1>Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
                        </div>
                        <Link to='/checkout'><button className='cart-item'>Finalizar Compra</button></Link>
                    </div>
                </div>
            }
            <div className='cart-button' onClick={() => setIsOpen(!isOpen)}>
                <img width='40px' src={icon} />
            </div>
        </div>
    )
}

export default Cart

