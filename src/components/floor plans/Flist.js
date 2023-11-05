import React from 'react'
import './Flist.css'
function Flist({ tower }) {
    let towerhandler = (val) => {
        
            let newtower = 'towerbtn' + val.toString()
            
            for (let i = 1; i <= 8; i++) {
                document.getElementById('towerbtn' + i.toString()).style.backgroundColor = 'white'
                document.getElementById('towerbtn' + i.toString()).style.color = '#D6B25E'
            }

            document.getElementById(newtower).style.backgroundColor = '#D6B25E'
            document.getElementById(newtower).style.color = 'white'


        
        
        tower(val)

    }
    return (
        <div className='towerslist'>
            <span>
                <button className='towerbtn' id='towerbtn1' onClick={() => towerhandler(1)}>Tower 1</button>
                <button className='towerbtn' id='towerbtn2' onClick={() => towerhandler(2)}>Tower 2</button>
                <button className='towerbtn' id='towerbtn3' onClick={() => towerhandler(3)}>Tower 3</button>
            </span>
            <span>
                <button className='towerbtn' id='towerbtn4' onClick={() => towerhandler(4)}>Tower 4</button>
                <button className='towerbtn' id='towerbtn5' onClick={() => towerhandler(5)}>Tower 5</button>
                <button className='towerbtn' id='towerbtn6' onClick={() => towerhandler(6)}>Tower 6</button>
            </span>
            <span>
                <button className='towerbtn' id='towerbtn7' onClick={() => towerhandler(7)}>Tower 7</button>
                <button className='towerbtn' id='towerbtn8' onClick={() => towerhandler(8)}>Tower 8</button>

            </span>
        </div>
    )
}

export default Flist
