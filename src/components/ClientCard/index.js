import React from 'react'

import './styles.css'

import star from './star.png'

function ClientCard({ src, name, feedbeck }) {
    return (
        <div className='clientcard'>
            <div className='clientcard-infos'>
                <img className='clientcard-infos-picture' src={src} alt='client image' />
                <div style={{textAlign: 'center'}}>
                    <h1>{name}</h1>
                    <img width='20px' src={star}/>
                    <img width='20px' src={star}/>
                    <img width='20px' src={star}/>
                    <img width='20px' src={star}/>
                </div>
            </div>
            <p>
                {feedbeck}
            </p>
        </div>
    )
}

export default ClientCard