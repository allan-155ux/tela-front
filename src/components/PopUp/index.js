import React, { useState } from 'react'

import './styles.css'

import close from './cancel.png'

function PopUp({ tittle, text, button }) {

    const [visible, setVisible] = useState(true)

    return (
        <>
            {
                visible &&
                <div className='popup-container'>
                    <img onClick={()=>setVisible(false)} width='30px' src={close} />
                    <div className='popup-main'>
                        <div className='popup-content'>
                            <h1>{tittle}</h1>
                            <p>{text}</p>
                            {
                                button &&
                                <div className='popup-button'>{button}</div>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PopUp