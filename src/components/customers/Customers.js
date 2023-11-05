import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'


import { Navigation} from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import './Customers.css'
import customer1 from '../images/customer1.png'
import customer2 from '../images/customer2.png'
import cmicon from '../images/cmicon.png'
import cmicon2 from '../images/cmicon2.png'
function Customers() {
    useEffect(()=>{
        for(let i=1;i<=6;i++){
            document.getElementById('slimg'+i.toString()).style.transition = 'all .3s'
            document.getElementById('sliderdiv2'+i.toString()).addEventListener('mouseenter',()=>{
                document.getElementById('slimg'+i.toString()).src = cmicon2
            })
            document.getElementById('sliderdiv2'+i.toString()).addEventListener('mouseleave',()=>{
                document.getElementById('slimg'+i.toString()).src = cmicon
            })

        }
    },[])
    return (
        <div className='row mt-5 mb-5 p-0'>
            <div className='col-12 p-0 ps-5 pe-5 customers'>
                <span>What Our Customer Say</span>
                <div className='swiperdiv2 mx-auto'>
                    <Swiper

                        modules={[Navigation]}
                        navigation
                        


                        slidesPerView={1}
                        breakpoints={{
                            992:{
                                slidesPerView:3
                            },
                            768:{
                                slidesPerView:1
                            }
                        }}
                        

                    >
                        <SwiperSlide>
                            <div className='sliderdiv2' id='sliderdiv21'>
                                <img src={customer1}></img>
                                <span>Lorem ipsum dolor</span>
                                <p>Lorem ipsum dolor sit amet. The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication.</p>
                                <span><img src={cmicon} id='slimg1'></img></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderdiv2' id='sliderdiv22'>
                                <img src={customer2}></img>
                                <span>Lorem ipsum dolor</span>
                                <p>Lorem ipsum dolor sit amet. The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication.</p>
                                <span><img src={cmicon} id='slimg2'></img></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderdiv2' id='sliderdiv23'>
                                <img src={customer1}></img>
                                <span>Lorem ipsum dolor</span>
                                <p>Lorem ipsum dolor sit amet. The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication.</p>
                                <span><img src={cmicon} id='slimg3'></img></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderdiv2' id='sliderdiv24'>
                                <img src={customer2}></img>
                                <span>Lorem ipsum dolor</span>
                                <p>Lorem ipsum dolor sit amet. The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication.</p>
                                <span><img src={cmicon} id='slimg4'></img></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderdiv2' id='sliderdiv25'>
                                <img src={customer1}></img>
                                <span>Lorem ipsum dolor</span>
                                <p>Lorem ipsum dolor sit amet. The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication.</p>
                                <span><img src={cmicon} id='slimg5'></img></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderdiv2' id='sliderdiv26'>
                                <img src={customer2}></img>
                                <span>Lorem ipsum dolor</span>
                                <p>Lorem ipsum dolor sit amet. The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication.</p>
                                <span><img src={cmicon} id='slimg6'></img></span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Customers
