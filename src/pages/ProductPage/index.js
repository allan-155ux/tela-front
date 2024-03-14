import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import './styles.css'

import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Footer from '../../components/Footer'
import PopUp from '../../components/PopUp'

import { useCart } from '../../contexts/cartContext'

function ProductPage() {

    const { addToCart } = useCart()

    const [product, setProduct] = useState([])

    const params = useParams()

    const { id } = params

    function getRandomTag() {
        const tags = ['pizza', 'drink', 'hamburger'];
        const randomIndex = Math.floor(Math.random() * tags.length);
        return tags[randomIndex];
    }

    const randomTag = getRandomTag()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`).then((response) => {
            setProduct(response.data)
        })
    }, [id])

    return (
        <>
            <PopUp button='WELCOME50' text='Imagine desfrutar de suas refeições favoritas com metade do preço! Simplesmente use o código promocional "WELCOME50" durante o checkout e aproveite esse generoso desconto em uma ampla variedade de opções gastronômicas.' tittle='50%off pra você aproveitar o novo delivery da sua cidade' />
            <Header />
            {product &&
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
                            <button onClick={() =>addToCart(product)}>Adicionar</button>
                        </div>
                    </div>
                </div>
            }
            <ProductList setColection={randomTag} />
            <Footer />
        </>
    )
}

export default ProductPage