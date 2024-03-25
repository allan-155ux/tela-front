import React, { useEffect, useState } from 'react'

import './styles.css'

import DashboardProductsItem from '../../components/DashboardProductsItem'
import axios from 'axios'
import FormProduct from '../../components/FormProduct'

function DashBoardProducts() {

    const [products, setProducts] = useState([])

    const [formIsOpen, setFormIsOpen] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products`).then(e => setProducts(e.data))
    }, [])

    return (
        <div className='dashboard-products'>
            <div onClick={() => setFormIsOpen(!formIsOpen)} className='dashboard-add-product'>{formIsOpen ? 'x' : '+'}</div>
            {formIsOpen &&
                <div className='dashboardproducts-form'>
                    <FormProduct add={true}/>
                </div>
            }
            {products ?
                products.map((product) => {
                    return (
                        <DashboardProductsItem product={product} />
                    )
                })
                : 'carregando'}
        </div>
    )
}

export default DashBoardProducts