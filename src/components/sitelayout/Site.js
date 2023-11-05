import React from 'react'
import './Site.css'
import data from '../../site.json'
import layout from '../images/sitelayout.png'
function Site() {

    let list = data[0].data

    return (
        <div className='row mt-5 p-0'>
            <div className='col-12  layout'>
                <span>Site layout</span>
                <p>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of communication have a stable relationship with these words, but what is it.</p>
                <img src={layout} className='img-fluid'></img>


                <div>

                    <span>
                        {list.slice(0, 14).map((item, index) =>
                            <p className='sitelist'>{index + 1}. {item}</p>
                        )}

                    </span>
                    <span>
                        {list.slice(14, 28).map((item, index) =>
                            <p className='sitelist'>{index + 15}. {item}</p>
                        )}

                    </span>
                    <span>
                        {list.slice(28, 43).map((item, index) =>
                            <p className='sitelist'>{index + 29}. {item}</p>
                        )}

                    </span>
                    <span>
                        {list.slice(44, list.length).map((item, index) =>
                            <p className='sitelist'>{index + 43}. {item}</p>
                        )}

                    </span>

                </div>

                <div>
                    <img src={layout} className='img-fluid'></img>
                    <div className='mx-auto'>
                        <span>
                            {list.slice(0, 26).map((item, index) =>
                                <p className='sitelist'>{index + 1}. {item}</p>
                            )}

                        </span>
                        <span>
                            {list.slice(26, 55).map((item, index) =>
                                <p className='sitelist'>{index + 15}. {item}</p>
                            )}

                        </span>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Site
