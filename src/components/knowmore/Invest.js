import React from 'react'
import './Invest.css'
function Invest({img, txt}) {
  return (
    <div className='investcard'>
      <img src={img}></img>
      <span>{txt}</span>
    </div>
  )
}

export default Invest
