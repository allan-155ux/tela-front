import React from 'react'
import './styles.css'
import ScrollToTopLink from '../ScrollToTopLink'

function Product({ src, tittle, description, id }) {
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
            </div>
        </ScrollToTopLink>
    )
}

export default Product