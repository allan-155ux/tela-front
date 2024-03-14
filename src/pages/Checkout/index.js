import React, { useState } from 'react'

import Header from '../../components/Header'

import './styles.css'

function Checkout() {

  const [completedAdress, setCompletedAdress] = useState(false)

  return (
    <>
      <Header />

      {completedAdress ?
        <div>
        <form className='checkout-form'>
          <h1>
            Informações de pagamento
          </h1>
          <div className='checkout-input'>
            <h2>Nome no cartão</h2>
            <input type='text' />
          </div>
          <div className='checkout-input'>
            <h2>Número do cartão</h2>
            <input type='text' />
          </div>
          <div className='checkout-input'>
            <h2>Data de vencimento</h2>
            <input type='text' />
          </div>
          <div className='checkout-input'>
            <h2>CVV</h2>
            <input type='text'/>
          </div>
          <div className='checkout-input'>
            <button>Finalizar pagamento</button>
          </div>
        </form>
      </div>
      :
        <div>
          <form className='checkout-form'>
            <h1>
              Informações de entrega
            </h1>
            <div className='checkout-input'>
              <h2>Nome</h2>
              <input type='text' />
            </div>
            <div className='checkout-input'>
              <h2>Endereço</h2>
              <input type='text' />
            </div>
            <div className='checkout-input'>
              <h2>Bairro</h2>
              <input type='text' />
            </div>
            <div className='checkout-input'>
              <h2>Cidade</h2>
              <input type='text'/>
            </div>
            <div className='checkout-input'>
              <h2>Cep</h2>
              <input type='number'/>
            </div>
            <div className='checkout-input'>
              <button onClick={()=>setCompletedAdress(!completedAdress)}>Ir para pagamento</button>
            </div>
          </form>
        </div>
      }
    </>
  )
}

export default Checkout