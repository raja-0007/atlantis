import React, { useState } from 'react'
import usflag from './images/usflag.png'
import polyg from './images/Polygon 1.svg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './Carousel.css'
function Carousel() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('')
    let namehandler=(e)=>{
        setName(e.target.value)
    }
    let emailhandler=(e)=>{
        setEmail(e.target.value)
    }
    let numberhandler=(value)=>{
        setNumber(value)
    }
    return (
        <div className='row'>
            <div className='col-12 cardiv'>
                
                <div className='enquirediv'>
                    <span>ENQUIRE NOW</span>
                    <form className='enquirediv-in'>
                        <input type='text' placeholder='Your Full Name' value={name} onChange={namehandler} required={true}></input>
                            <PhoneInput
                              country={'us'}
                              value={number}
                              onChange={numberhandler}
                              inputProps={
                                {required:true}
                              } className='phinp'></PhoneInput>
                        
                        <input type='email' placeholder='Your Email Id' value={email} onChange={emailhandler} required={true}></input>
                        <button className='carbtn' type='submit'>Submit</button>
                    </form>
                    

                </div>
                <div className='enquirediv2 p-5'>
                    <span>NRI's Best Investment Idea</span>
                    <span>The wisest investment in Hyderabad, the prices are always on the rise!At Narsingi, near Kokapet.</span>
                    <button>Download Brochure</button>
                </div>
                
                
            </div>
            <div className='col-12 mt-5 enquirediv3'>
                    <span>ENQUIRE NOW</span>
                    <form className='enquirediv-in'>
                        <input type='text' placeholder='Your Full Name' value={name} onChange={namehandler} required={true}></input>
                            <PhoneInput
                              country={'us'}
                              value={number}
                              onChange={numberhandler}
                              inputProps={
                                {required:true}
                              } className='phinp'></PhoneInput>
                        
                        <input type='email' placeholder='Your Email Id' value={email} onChange={emailhandler} required={true}></input>
                        <button className='carbtn' type='submit'>Submit</button>
                    </form>
                    

                </div>
            
        </div>
    )
}

export default Carousel
