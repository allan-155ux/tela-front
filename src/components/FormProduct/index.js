import React, { useEffect, useState } from 'react'

import './styles.css'
import axios from 'axios';

function FormProduct({ add, product = {
    title: '',
    subtitle: '',
    description: '',
    price: 0,
    lastprice: 0,
    tag: '',
    url: ''
} }) {

    const [formProduct, setFormProduct] = useState({
        title: '',
        subtitle: '',
        description: '',
        price: '',
        lastprice: '',
        tag: '',
        url: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormProduct({ ...formProduct, [name]: value });
    };

    const editProduct = async (e) => {
        await axios.put(`${process.env.REACT_APP_API_URL}/product/${product.id}`, formProduct)
    }

    const addProduct = async (e) => {
        await axios.post(`${process.env.REACT_APP_API_URL}/product`, formProduct)
    }

    useEffect(() => {
        setFormProduct({
                title: product.title,
                subtitle: product.subtitle,
                description: product.description,
                price: product.price,
                lastprice: product.lastprice,
                tag: product.tag,
                url: product.url
            })
    }, product)

    return (
        <form>
            <div className='formproduct-input'>
                <h1>Titulo</h1>
                <input name='title' onChange={handleChange} value={formProduct.title} type='text' />
            </div>
            <div className='formproduct-input'>
                <h1>Sub-titulo</h1>
                <input name='subtitle' onChange={handleChange} value={formProduct.subtitle} type='text' />
            </div>
            <div className='formproduct-input'>
                <h1>Descrição</h1>
                <input name='description' onChange={handleChange} value={formProduct.description} type='text' />
            </div>
            <div className='formproduct-input'>
                <h1>Preço</h1>
                <input name='price' onChange={handleChange} value={formProduct.price} type='text' />
            </div>
            <div className='formproduct-input'>
                <h1>Preço anterior</h1>
                <input name='lastprice' onChange={handleChange} value={formProduct.lastprice} type='text' />
            </div>
            <div className='formproduct-input'>
                <h1>Tag</h1>
                <input name='tag' onChange={handleChange} value={formProduct.tag} type='text' />
            </div>
            <div className='formproduct-input'>
                <h1>Url</h1>
                <input name='url' onChange={handleChange} value={formProduct.url} type='text' />
            </div>
            <div className='formproduct-input'>
                {add ?
                    <button onClick={addProduct}>Adicionar produto</button>
                    :
                    <button onClick={editProduct}>Editar produto</button>
                }
            </div>
        </form>
    )
}

export default FormProduct