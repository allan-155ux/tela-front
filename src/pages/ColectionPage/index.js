import React from 'react'

import './styles.css'

import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Footer from '../../components/Footer'
import PopUp from '../../components/PopUp'

function ColectionPage() {
    return (
        <>
            <PopUp button='WELCOME50' text='Imagine desfrutar de suas refeições favoritas com metade do preço! Simplesmente use o código promocional "WELCOME50" durante o checkout e aproveite esse generoso desconto em uma ampla variedade de opções gastronômicas.' tittle='50%off pra você aproveitar o novo delivery da sua cidade' />
            <Header />
            <ProductList />
            <Footer/>
        </>
    )
}

export default ColectionPage