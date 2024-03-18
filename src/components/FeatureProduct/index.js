import React from 'react'
import { useCart } from '../../contexts/cartContext'

function FeatureProduct({ product }) {

    const { addToCart } = useCart()

    return (
        <div className='productpage-product'>
            <img className='productpage-image' src={product.url} />
            <div className='productpage-infos'>
                <h1>{product.title}</h1>
                <h3>{product.subtitle}</h3>
                <p>{product.description}</p>

                <div className='productpage-price'>
                    <h2>R${product.lastprice}</h2>
                    <h1>R${product.price}</h1>
                </div>

                <div>
                    <button onClick={() => addToCart(product)}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}

export default FeatureProduct