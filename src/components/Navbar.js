import React from 'react'
import './Navbar.css'
import vasavilogo from './images/vasavi-logo2.png'


function Navbar() {


    return (
        <div className='row p-0 sticky-top'>
            <div className='col-lg-11 p-0 mx-auto'>
                <nav class="navbar  navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img className='v-logo' src={vasavilogo}></img></a>
                        <button class="n-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"  >
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Why Invest In Hyderabad</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Amenities</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Floor Plans</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Price</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Our Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><button className='nav-btn'>Request a call back</button></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Navbar
