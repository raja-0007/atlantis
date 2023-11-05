import React, { useEffect, useState } from 'react'
import down from '../images/down.png'
import up from '../images/up.png'
import './Faq.css'
import $ from 'jquery'
function Faq() {
    let faqs = [
        {
            q: 'What is Lorem Ipsum?',
            a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
        },
        {
            q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
        },
        {
            q: "Sed do eiusmod tempor incididunt ut labore?",
            a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
        },
        {
            q: "Vivamus at augue eget arcu dictum varius. Congue ?",
            a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
        },
    ]
    
    
    useEffect(() => {
        $(document).ready(()=>{
            for (let i = 0; i < faqs.length; i++) {
                $('#qdiv'+i.toString()).click(()=>{
                    $('#adiv'+i.toString()).slideToggle(500)
                    
                    
                    
                    
                    
                })
                document.getElementById('qdiv'+i.toString()).addEventListener('click',()=>{
                    let className = document.getElementById('img'+i.toString()).className
                    if(className == 'fa-solid fa-chevron-down'){
                        document.getElementById('img'+i.toString()).className = 'fa-solid fa-chevron-up'
                    }
                    else if(className == 'fa-solid fa-chevron-up'){
                        document.getElementById('img'+i.toString()).className = 'fa-solid fa-chevron-down'
                    }
                })
            }
            
        })
        
    }, [])
    return (
        <div className='row mt-5'>
            <div className='col-lg-8 col-12 mx-auto faqs'>
                <span>FAQs</span>
                {faqs.map((item, index) =>
                    index != faqs.length - 1 ?
                        (
                            
                                <div className='faqdiv'>
                                    <div className='qdiv' id={'qdiv'+index.toString()}>{item.q}<i class="fa-solid fa-chevron-down" id={'img'+index.toString()}></i></div>
                                    <div className='adiv' id={'adiv'+index.toString()}>{item.a}</div>
                                </div>

                            
                        ) : (
                            <div className='faqdivl'>
                                <div className='qdiv' id={'qdiv'+index.toString()}>{item.q}<i class="fa-solid fa-chevron-down" id={'img'+index.toString()}></i></div>
                                <div className='adiv' id={'adiv'+index.toString()}>{item.a}</div>
                            </div>
                        )

                )}
            </div>

        </div>
    )
}

export default Faq
