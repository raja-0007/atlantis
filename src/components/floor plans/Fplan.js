import React, { useState } from 'react'
import './Fplan.css'
import Flist from './Flist'
import Fimg from './Fimg'
import tower1 from '../images/tower1.png'
import tower2 from '../images/tower2.png'
import tower3 from '../images/tower35.png'
import tower4 from '../images/tower4.png'
import tower5 from '../images/tower35.png'
import tower6 from '../images/tower6.png'
import tower7 from '../images/tower7.png'
import tower8 from '../images/tower8.png'

function Fplan() {
    const [img,setImg] = useState(tower1)
    let imgs = [tower1,tower2,tower3,tower4,tower5,tower6,tower7,tower8]
    let tower=(value)=>{
        
        setImg(imgs[value-1])
    }

    return (

        <div className='row mt-5 p-0 pb-5'>
            <div className='col-12 p-0 ps-5 pe-5 fplan'>
                <div className='fp-1'>
                    <span>Floor Plans</span>
                    <span>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it.</span>
                    <Flist tower={tower}/>
                    <button className='fp-btn'>Download Brochure</button>
                </div>
                <Fimg  img={img}/>
            </div>
            <div className='col-12 p-0 ps-5 pe-5 fplan2'>
                <div className='fp-1'>
                    <span>Floor Plans</span>
                    <span>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it.</span>
                    
                    <Fimg  img={img}/>
                    <Flist tower={tower}/>
                    <button className='fp-btn'>Download Brochure</button>
                </div>
                
            </div>
        </div>
    )
}

export default Fplan
