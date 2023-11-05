import React from 'react'
import './Growth.css'
import growth1 from '../images/growth1.png'
import growth2 from '../images/growth2.png'
import growth3 from '../images/growth3.png'
import growth4 from '../images/growth4.png'
function Growth() {
    return (
        <div className='row mt-5 p-0'>
            <div className='col-12 growth'>
                <span>Hyderabad's real estate growth in the last 3 years</span>
                <p>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it.</p>
                <div className='mx-auto'>
                    <span>
                        <div className='g-div'>
                            <img src={growth1}></img>
                            <span>
                                <span>At least</span>
                                <span className='g-big'>25<sup>%</sup>-45<sup>%</sup></span>
                                <span>peak in average rental spends</span>
                            </span>
                        </div>
                        <div className='g-div'>
                            <img src={growth2}></img>
                            <span>
                                <span className='g-big'>200%</span>
                                <span >rapid increase in investments</span>
                            </span>
                        </div>
                    </span>
                    <span>
                        <div className='g-div'>
                            <img src={growth3}></img>
                            <span>

                                <span className='g-big'>26%<small className='yoy'>YoY</small></span>
                                <span>growth in property registrations in July 2023</span>
                            </span>
                        </div>
                        <div className='g-div'>
                            <img src={growth4}></img>
                            <span>

                                <span className='g-big'>25%</span>
                                <span>increase in price of 1 sq.ft in real estate</span>
                            </span>
                        </div>
                    </span>

                </div>
            </div>

        </div>
    )
}

export default Growth
