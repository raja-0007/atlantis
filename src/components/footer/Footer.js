import React from 'react'
import logo from '../images/Vasavi-Logo.png'
import fb from '../images/fb.png'
import insta from '../images/insta.png'
import twitter from '../images/twitter.png'
import lin from '../images/lin.png'
import ytube from '../images/ytube.png'
import './Footer.css'
function Footer() {
    return (
        <div className='row mt-5 pt-5'>
            <div className='col-12 P-0 ps-5 pe-5 footer'>
                <div className='flogodiv'>
                    <img src={logo} className='flogo'></img>
                    <span>Follow us on</span>
                    <span><img src={fb}></img>
                        <img src={insta}></img>
                        <img src={twitter}></img>
                        <img src={lin}></img>
                        <img src={ytube}></img></span>
                </div>
                <div className='faddress'>
                    <span><span className='fheads'>ADDRESS:</span><br></br>
                        <br></br>
                        Vasavi Constructions LLP, Vasavi Atlantis, Sy No. 280/1, Narsingi Village, Gandipet Mandal, Rangareddy,
                        Hyderabad - 500075
                    </span>

                </div>
                <div className='femail'>
                    <span><span className='fheads'>Contact Us:</span><br></br>+91 8068979625 | +91 9533514444</span>
                    <span><span className='fheads'>Email Us:</span><br></br>sales@vasaviatlantis.com</span>
                </div>

                <div>
                    <span>Follow us on</span>
                    <span><img src={fb}></img>
                        <img src={insta}></img>
                        <img src={twitter}></img>
                        <img src={lin}></img>
                        <img src={ytube}></img></span>
                </div>
            </div>

        </div>
    )
}

export default Footer
