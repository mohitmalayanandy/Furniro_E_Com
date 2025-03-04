import React from 'react'
import './HashShare.css'

const HashShare = () => {
  return (
    <div className="hashshare">
        <p>Share Your setup with</p>
        <h2>#FurniroFurniture</h2>
        <div className="divider">
            <div className='divider-left'>
                <div className='divider-left-up'>
                    <img src="src\assets\bed_1.jpeg" alt="" />
                    <img src="src\assets\bed_2.jpeg" alt="" />
                </div>
                <div className='divider-left-down'>
                    <img src="src\assets\bed_3.jpeg" alt="" />
                    <img src="src\assets\bed_4.jpeg" alt="" />
                </div>
            </div>
            <div className='divider-center'>
                <img src="src\assets\dine_1.jpeg" alt="" />
            </div>
            <div className='divider-right'>
                <div className='divider-right-up'>
                    <img src="src\assets\dine_15.jpeg" alt="" />
                    <img src="src\assets\dine_11.jpeg" alt="" />
                </div>
                <div className='divider-right-down'>
                    <img src="src\assets\dine_7.jpeg" alt="" />
                    <img src="src\assets\dine_8.jpeg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HashShare
