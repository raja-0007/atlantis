import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper/modules'
import 'swiper/css'

import 'swiper/css/pagination'

import './Amenities.css'
import pic1 from '../images/My Home Apas - Amenities Icons - 5.png'
import pic2 from '../images/amenities2.png'
import pic3 from '../images/amenities3.png'
import pic4 from '../images/amenities4.png'
import Amdiv from './Amdiv'


function Amenities() {
    const amenities = [
        {
            img: pic1,
            txt: 'Fitness Centers'
        },
        {
            img: pic2,
            txt: 'Walking & Jogging Track'
        },
        {
            img: pic3,
            txt: 'Kids Play Area'
        },
        {
            img: pic4,
            txt: 'Swimming Pool'
        },
        {
            img: pic1,
            txt: 'Fitness Centers'
        },
        {
            img: pic4,
            txt: 'Swimming Pool'
        },
        {
            img: pic3,
            txt: 'Kids Play Area'
        },

        {
            img: pic1,
            txt: 'Fitness Centers'
        },
        {
            img: pic2,
            txt: 'Walking & Jogging Track'
        },
        {
            img: pic4,
            txt: 'Swimming Pool'
        },
        {
            img: pic3,
            txt: 'Kids Play Area'
        },
        {
            img: pic1,
            txt: 'Fitness Centers'
        },
        {
            img: pic4,
            txt: 'Swimming Pool'
        },
        {
            img: pic2,
            txt: 'Walking & Jogging Track'
        },
        {
            img: pic3,
            txt: 'Kids Play Area'
        },


    ]
    return (
        <div className='row mt-5 p-0'>
            <div className='col-12 p-0 ps-5 pe-5 amenities'>
                <span>Amenities</span>
                <p>Vasavi Atlantis is committed to providing an elite experience should you choose to stay in this heavenly abode. The array of premium features make this an ideal investment in the ever progressive Hyderabad.</p>
                <div className='swiperdiv'>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={100}
                        pagination={
                            {
                                clickable: true,

                            }}

                        slidesPerView={1}
                    >

                        <SwiperSlide>
                            <div className='am-wrapper'>
                                <div className='am-wrapperin'>
                                    {amenities.slice(0, 5).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                                <div className='am-wrapperin'>
                                    {amenities.slice(5,10).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                                <div className='am-wrapperin'>
                                    {amenities.slice(10,15).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='am-wrapper'>
                                <div className='am-wrapperin'>
                                    {amenities.slice(0, 5).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                                <div className='am-wrapperin'>
                                    {amenities.slice(5,10).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                                <div className='am-wrapperin'>
                                    {amenities.slice(10,15).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='am-wrapper'>
                                <div className='am-wrapperin'>
                                    {amenities.slice(0, 5).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                                <div className='am-wrapperin'>
                                    {amenities.slice(5,10).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                                <div className='am-wrapperin'>
                                    {amenities.slice(10,15).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>

                <div className='swiperdivr'>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={100}
                        pagination={
                            {
                                clickable: true,

                            }}

                        slidesPerView={1}
                    >

                        <SwiperSlide>
                            <div className='am-wrapper'>
                            <div className='am-wrapperin'>
                                    {amenities.slice(0, 2).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                                <div className='am-wrapperin'>
                                    {amenities.slice(2,4).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='am-wrapper'>
                        <div className='am-wrapperin'>
                                    {amenities.slice(0, 2).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                                <div className='am-wrapperin'>
                                    {amenities.slice(2,4).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='am-wrapper'>
                        <div className='am-wrapperin'>
                                    {amenities.slice(0, 2).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                                <div className='am-wrapperin'>
                                    {amenities.slice(2,4).map(item =>
                                        <Amdiv item={item} />
                                    )}
                                </div>

                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>


                <button className='c-btn am-btn'>Contact Us</button>
            </div>

        </div>
    )
}

export default Amenities
