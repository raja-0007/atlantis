import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import './Projects.css'
import pjimg1 from '../images/Project Image 1.png'
import pjimg2 from '../images/Project Image 2.png'
import pjimg3 from '../images/Project Image 3.png'
function Projects() {
  return (
    <div className='row mt-5'>
        <div className='col-12 p-5 projects'>
            <span>Our Other Projects</span>
            <p>Lorem ipsum dolor sit amet. The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it.</p>
            <div className='swiperdiv2 pswiper mx-auto'>
                    <Swiper
                        
                        modules={[Navigation]}
                        navigation
                        

                        
                        slidesPerView={1}
                        breakpoints={{
                            992:{
                                slidesPerView:3
                            },
                            768:{
                                slidesPerView:3
                            }
                        }}
                        
                        

                    >
                        <SwiperSlide>
                            <div className='psliderdiv' id='psliderdiv1'>
                                <img src={pjimg1}></img>
                                <span>Vasavi Crown East</span>
                                <span>Uppal, Hyderabad</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='psliderdiv' id='ppsliderdiv'>
                                <img src={pjimg2}></img>
                                <span>Vasavi Sarovar</span>
                                <span>Kukatpally, Hyderabad</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='psliderdiv' id='psliderdiv3'>
                                <img src={pjimg3}></img>
                                <span>Vasavi Skyla</span>
                                <span>Hitech city, Hyderabad</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='psliderdiv' id='psliderdiv4'>
                                <img src={pjimg1}></img>
                                <span>Vasavi Crown East</span>
                                <span>Uppal, Hyderabad</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='psliderdiv' id='psliderdiv5'>
                                <img src={pjimg2}></img>
                                <span>Vasavi Sarovar</span>
                                <span>Kukatpally, Hyderabad</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='psliderdiv' id='psliderdiv6'>
                                <div><img src={pjimg3} className='img-fluid'></img></div>
                                <span>Vasavi Skyla</span>
                                <span>Hitech city, Hyderabad</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
        </div>
      
    </div>
  )
}

export default Projects
