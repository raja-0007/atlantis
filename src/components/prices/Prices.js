import React, { useEffect } from 'react'
import './Prices.css'
import lock from '../images/Lock.png'
import lock2 from '../images/Lock2.png'
function Prices() {
    useEffect(()=>{
        for(let i=1;i<=3;i++){
            console.log('price'+i.toString())
            document.getElementById('price'+i.toString()).addEventListener('mouseenter',()=>{
                document.getElementById('img'+i.toString()).src = lock2
                document.getElementById('unlbtn'+i.toString()).style.backgroundColor = 'white'
                document.getElementById('unlbtn'+i.toString()).style.color = '#D6B25E'
            })
            document.getElementById('price'+i.toString()).addEventListener('mouseleave',()=>{
                document.getElementById('img'+i.toString()).src = lock
                document.getElementById('unlbtn'+i.toString()).style.backgroundColor = '#D6B25E'
                document.getElementById('unlbtn'+i.toString()).style.color = 'white'
            })
            document.getElementById('price2'+i.toString()).addEventListener('mouseenter',()=>{
                document.getElementById('img2'+i.toString()).src = lock
                document.getElementById('unlbtn2'+i.toString()).style.backgroundColor = 'white'
                document.getElementById('unlbtn2'+i.toString()).style.color = '#D6B25E'
            })
            document.getElementById('price2'+i.toString()).addEventListener('mouseleave',()=>{
                document.getElementById('img2'+i.toString()).src = lock2
                document.getElementById('unlbtn2'+i.toString()).style.backgroundColor = '#D6B25E'
                document.getElementById('unlbtn2'+i.toString()).style.color = 'white'
            })
        }
    },[])
    
  return (
    <div className='row mt-5 p-0'>
        <div className='col-12 p-5 prices'>
            <span>Our Prices</span>
            <p>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it.</p>
            <div>
                <div className='price' id='price1'>
                    <span>2BHK 1325 sq.ft</span>
                    <img src={lock} id='img1'></img>
                    <button id='unlbtn1'>Unlock The Price</button>
                </div>
                <div className='price' id='price2'>
                    <span>2BHK 1325 sq.ft</span>
                    <img src={lock} id='img2'></img>
                    <button id='unlbtn2'>Unlock The Price</button>
                </div>
                <div className='price' id='price3'>
                    <span>2BHK 1325 sq.ft</span>
                    <img src={lock} id='img3'></img>
                    <button id='unlbtn3'>Unlock The Price</button>
                </div>
            </div>
            <div>
                <div className='price' id='price21'>
                    <span>2BHK 1325 sq.ft</span>
                    
                    <button id='unlbtn21'><img src={lock2} id='img21'></img>Unlock The Price</button>
                </div>
                <div className='price' id='price22'>
                    <span>2BHK 1325 sq.ft</span>
                    
                    <button id='unlbtn22'><img src={lock2} id='img22'></img>Unlock The Price</button>
                </div>
                <div className='price' id='price23'>
                    <span>2BHK 1325 sq.ft</span>
            
                    <button id='unlbtn23'><img src={lock2} id='img23'></img>Unlock The Price</button>
                </div>
            </div>
            <button className='pr-btn'>Request A Call Back</button>
        </div>
      
    </div>
  )
}

export default Prices
