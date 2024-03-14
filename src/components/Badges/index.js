import React from 'react'

import './styles.css'

import badges from './badges-1.png'
import badges2 from './badges-2.png'

function Badges() {
  return (
    <div className='badges-container'>
        <img height='100px' src={badges}/>
        <img height='90px' src={badges2}/>
    </div>
  )
}

export default Badges