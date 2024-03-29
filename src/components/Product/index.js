import React from 'react'
import './styles.css'
import ScrollToTopLink from '../ScrollToTopLink'

function Product({ src, tittle, description, id, price }) {
    return (
        <ScrollToTopLink className='product-link' to={`/product/${id}`}>
            <div className='product-container'>
                <div>
                    <img className='product-img' src={src} />
                </div>
                <h3>
                    {tittle}
                </h3>
                <p>
                    {description}
                </p>
                <h2>
                    {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}
                </h2>
            </div>
        </ScrollToTopLink>
    )
}

export default Product