import React from 'react'

import ClientCard from '../ClientCard'

import './styles.css'

import pic1 from '../../images/Mohammad-H-Tahmasebi.png'
import pic2 from '../../images/OIP.jpg'
import pic3 from '../../images/image-8.png'

function Feedbecks() {
    return (
        <div className='feedbecks-container'>
            <ClientCard src={pic1} feedbeck='Queria dar um shoutout especial para o cupom de 50% que vocês me deram de boas-vindas. Sério, isso foi um golzão! Me fez sentir super especial e deixou minha primeira vez com vocês muito mais maneira.' name='João Carlos'/>
            <ClientCard src={pic2} feedbeck='Galera da pizzaria, só queria dizer que a pizza que pedi ontem estava sensacional! Massa crocante, recheio farto e o entregador super simpático. Continuem arrasando!' name='Paulo Sergio'/>
            <ClientCard src={pic3} feedbeck='Vocês já pensaram em criar um programa de fidelidade para os clientes frequentes? Acho que seria uma ótima ideia!' name='Livia Lélis'/>
        </div>
    )
}

export default Feedbecks