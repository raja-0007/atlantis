import React from 'react'
import km_img1 from '../images/charminar.png'
import '../knowmore/Invest.css'
import './Chat.css'
import Invest from '../knowmore/Invest'
import invest5 from '../images/invest5.png'
import invest6 from '../images/invest6.png'
import invest7 from '../images/invest7.png'
import invest8 from '../images/invest8.png'
function Chat() {
    return (
        <div className='row mt-5 km-outer'>

            <div className='col-sm-6 p-0  my-auto'>
                <div className='km-div ch-div mx-auto'>
                    <span>
                        <span>Why Invest in India?</span>
                        <span>Why Invest in Hyderabad?</span>
                       
                    </span>
                    <span>
                        <div className='investdivs cinvestdivs'>
                            <Invest img={invest5} txt={"11% rise in demand in Hyderabad's residential market."} />
                            <Invest img={invest6} txt={"Hyderabad’s real estate market ranks highest in competition with 8 major cities."} />
                        </div>
                        <div className='investdivs cinvestdivs'>
                            <Invest img={invest7} txt={'Migrants prefer this progressive city and make up to 24% of the population.'} />
                            <Invest img={invest8} txt={'Telangana registered 31.44% growth in IT exports in 2022-23'} />
                        </div>



                    </span>
                    <button className='carbtn kmbtn'>Chat With US</button>
                </div>

            </div>
            <div className='col-sm-6 p-0 '>
                <img src={km_img1} className='img-fluid'></img>
            </div>
        </div>
    )
}

export default Chat
