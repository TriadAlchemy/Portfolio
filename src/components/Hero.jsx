import React from 'react'
import './Hero.css'
import logo from '../assets/logo.png'

function Hero() {
  return (
    <div id='home' className='hero'>
        <img className="im" src={logo} alt=""/>
        <h1><span>Transforming ideas into reality</span></h1>
        <p>Triad Alchemy transforms your digital visions into captivating solutions through exceptional designs and seamless functionality, elevating your brand and driving growth.</p>

    </div>
    
  )
}

export default Hero