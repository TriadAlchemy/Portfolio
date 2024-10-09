import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <h1>Triad Alchemy</h1>
                <p>Triad Alchemy transforms your digital visions into captivating solutions through exceptional designs and seamless functionality, elevating your brand and driving growth.</p>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>© 2024 Triad Alchemy. All rights reserved.</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer