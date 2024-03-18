import React, { useState } from 'react'

import Header from '../../components/Header'

import './styles.css'

import { useCart } from '../../contexts/cartContext'

function Checkout() {

  const { getTotal } = useCart()

  const [client, setClient] = useState()

  const [completedAdress, setCompletedAdress] = useState(false)

  // Card
  const [formDataCard, setFormDataCard] = useState({
    customerId: '',
    value: getTotal(),
    description: 'Compra Online',
    cardNumber: '',
    cardExpirationMonth: '',
    cardExpirationYear: '',
    cardCvv: ''
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setFormDataCard({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormDataCard({ ...formData, customerId: client });

    try {
      const response = await fetch('/create-payment-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error);
      }

      const responseData = await response.json();
      console.log('Pagamento criado:', responseData);
    } catch (error) {
      console.error('Erro ao criar pagamento com cartão de crédito:', error.message);
    }
  };

  // Client
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpfCnpj: '',
    postalCode: '',
    address: '',
    addressNumber: '',
    complement: '',
    province: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateClient = async (e) => {
    try {
      const response = await fetch('/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error);
        setCompletedAdress(true)
      }

      const responseData = await response.json();
      console.log('Cliente criado:', responseData);
      setClient(responseData)
    } catch (error) {
      console.error('Erro ao criar cliente:', error.message);
    }
  };

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
              <h2>Número do cartão</h2>
              <input type="text" name="cardNumber" placeholder="Número do Cartão" value={formDataCard.cardNumber} onChange={handleCardChange} />
            </div>
            <div className='checkout-input'>
              <h2>Mês de expiração</h2>
              <input type="text" name="cardExpirationMonth" placeholder="Mês de Expiração" value={formDataCard.cardExpirationMonth} onChange={handleCardChange} />
            </div>
            <div className='checkout-input'>
              <h2>Ano de expiração</h2>
              <input type="text" name="cardExpirationYear" placeholder="Ano de Expiração" value={formDataCard.cardExpirationYear} onChange={handleCardChange} />
            </div>
            <div className='checkout-input'>
              <h2>CVV</h2>
              <input type="text" name="cardCvv" placeholder="CVV" value={formDataCard.cardCvv} onChange={handleCardChange} />
            </div>
            <div className='checkout-input'>
              <button onClick={handleSubmit}>Finalizar pagamento</button>
            </div>
          </form>
        </div>
        :
        <div>
          <form className='checkout-form'>
            <h1>
              Informações do cliente
            </h1>
            <div className='checkout-input'>
              <h2>Nome</h2>
              <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} />
            </div>
            <div className='checkout-input'>
              <h2>Email</h2>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <div className='checkout-input'>
              <h2>Cpf/Cnpj</h2>
              <input type="text" name="cpfCnpj" placeholder="CPF/CNPJ" value={formData.cpfCnpj} onChange={handleChange} />
            </div>
            <div className='checkout-input'>
              <h2>Cep</h2>
              <input type="text" name="postalCode" placeholder="CEP" value={formData.postalCode} onChange={handleChange} />
            </div>
            <div className='checkout-input'>
              <h2>Enderço</h2>
              <input type="text" name="address" placeholder="Endereço" value={formData.address} onChange={handleChange} />
            </div>
            <div className='checkout-input'>
              <h2>Número</h2>
              <input type="text" name="addressNumber" placeholder="Número" value={formData.addressNumber} onChange={handleChange} />
            </div>
            <div className='checkout-input'>
              <h2>Complemento</h2>
              <input type="text" name="complement" placeholder="Complemento" value={formData.complement} onChange={handleChange} />
            </div>
            <div className='checkout-input'>
              <h2>Estado</h2>
              <input type="text" name="province" placeholder="Estado" value={formData.province} onChange={handleChange} />
            </div>
            <div className='checkout-input'>
              <h2>Telefone</h2>
              <input type="text" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className='checkout-input'>
              <button onClick={()=>{
                handleCreateClient()
              }}>Ir para pagamento</button>
            </div>
          </form>
        </div>
      }
    </>
  )
}

export default Checkout