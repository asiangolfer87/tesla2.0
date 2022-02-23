import React from 'react'
import './ButtonSecondary.css'

function ButtonSecondary({name, type, onCLick}) {
  return (
    <button className='buttonSecondary'>
       {name}
    </button>
  )
}

export default ButtonSecondary
