import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './Location.css'
function Location() {
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
        <div className='row mt-5'>
            <div className='col-12 p-0 location'>
                <span>Location</span>
                <p>Lorem ipsum dolor sit amet. The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it.</p>
                <div>
                    <div className=' loc-enq '>
                        <span>ENQUIRE NOW</span>
                        <form className='loc-enq-in'>
                            <input type='text' placeholder='Your Full Name' value={name} onChange={namehandler} required={true}></input>
                            <PhoneInput
                                country={'us'}
                                value={number}
                                onChange={numberhandler}
                                inputProps={
                                    { required: true }
                                } className='phinp'></PhoneInput>

                            <input type='email' placeholder='Your Email Id' value={email} onChange={emailhandler} required={true}></input>
                            <button className='loc-enqbtn' type='submit'>Submit</button>
                        </form>


                    </div>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487341.0455824097!2d78.357506!3d17.394891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95888f380be5%3A0x181c12d24813624e!2sVasavi%20Atlantis!5e0!3m2!1sen!2sus!4v1699016282670!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    )
}

export default Location
