import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import './styles.css'

import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Footer from '../../components/Footer'
import PopUp from '../../components/PopUp'

import FeatureProduct from '../../components/FeatureProduct'

function ProductPage() {
    
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
                <FeatureProduct product={product}/>
            }
            <ProductList setColection={randomTag} />
            <Footer />
        </>
    )
}

export default ProductPage