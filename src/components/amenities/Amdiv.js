import React from 'react'
import './Amdiv.css'
function Amdiv({item}) {
  return (
    
        <div className='amdiv'>
            <img src={item.img}></img>
            <p>{item.txt}</p>
        </div>
      
    
  )
}

export default Amdiv
