import React from 'react'

import Header from '../../components/Header'

import './styles.css'

function Checkout() {
  return (
    <>
      <Header />
      <div>
        <form className='checkout-form'>
          <h1>
            Informações de entrega
          </h1>
          <div className='checkout-input'>
            <h2>Nome</h2>
            <input />
          </div>
          <div className='checkout-input'>
            <h2>Endereço</h2>
            <input />
          </div>
          <div className='checkout-input'>
            <h2>Bairro</h2>
            <input />
          </div>
          <div className='checkout-input'>
            <h2>Cidade</h2>
            <input />
          </div>
          <div className='checkout-input'>
            <h2>Cep</h2>
            <input />
          </div>
          <div className='checkout-input'>
            <button>Ir para pagamento</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Checkout