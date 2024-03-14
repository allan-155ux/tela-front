import React from 'react'

import HomeHeader from '../../components/HomeHeader';
import ProductList from '../../components/ProductList';
import Badges from '../../components/Badges';
import PopUp from '../../components/PopUp'
import Feedbecks from '../../components/feedBecks';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';

function HomePage() {
    return (
        <>
            <HomeHeader />
            <Cart />
            <PopUp button='WELCOME50' text='Imagine desfrutar de suas refeições favoritas com metade do preço! Simplesmente use o código promocional "WELCOME50" durante o checkout e aproveite esse generoso desconto em uma ampla variedade de opções gastronômicas.' tittle='50%off pra você aproveitar o novo delivery da sua cidade' />
            <Badges />
            <ProductList setColection='promotion'/>
            <Feedbecks />
            <ProductList setColection='drink'/>
            <Footer />
        </>
    )
}

export default HomePage