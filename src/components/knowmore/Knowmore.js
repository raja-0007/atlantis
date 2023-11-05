import React from 'react'
import km_img1 from '../images/knowmore1.jpeg'
import './Knowmore.css'
import Invest from './Invest'
import invest1 from '../images/invest1.png'
import invest2 from '../images/invest2.png'
import invest3 from '../images/invest3.png'
import invest4 from '../images/invest4.png'
function Knowmore() {
    return (
        <div className='row mt-5 km-outer'>
            <div className='col-sm-6 p-0'>
                <img src={km_img1} className='img-fluid'></img>
            </div>
            <div className='col-sm-6 p-0  my-auto'>
                <div className='km-div mx-auto'>
                    <span>
                        <span>Should you really</span>
                        <span>Invest in real estate?</span>
                        <span>Check if real estate is for you.</span>
                    </span>
                    <span>
                        <div className='investdivs'>
                            <Invest img={invest1} txt={'Property rates increased by an average of 15.1% YoY.'} />
                            <Invest img={invest2} txt={"Small, big or large, there's an investment for everyone."} />
                        </div>
                        <div className='investdivs'>
                            <Invest img={invest3} txt={'Benefit of a stable cash flow, profitable returns and other tax advantages.'} />
                            <Invest img={invest4} txt={'Risks associated with investment are minimal compared to stock market.'} />
                        </div>



                    </span>
                    <button className='carbtn kmbtn'>Know More</button>
                </div>

            </div>
        </div>
    )
}

export default Knowmore
