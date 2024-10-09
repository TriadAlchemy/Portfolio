import React from 'react'
import './About.css'
import lg2 from '../assets/lg2.png'

function About() {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Us</h1>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img className="im1" src={lg2} alt=""/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>Triad Alchemy is enriching digital experiences through knowledgeable web design, seamless functionality, and strategic growth. </p>
                    <p>Our full-stack development company, offering collaborations with a client-centric focus and online marketing, has over three years of experience. On-time, on-budget projects further improve your brand, increase visibility, and drive business growth.</p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"100%"}} /></div>
                    <div className='about-skill'><p>React</p><hr style={{width:"100%"}} /></div>
                    <div className='about-skill'><p>JavaScript</p><hr style={{width:"100%"}}/></div>
                    <div className='about-skill'><p>Node JS</p><hr style={{width:"100%"}} /></div>
                    <div className='about-skill'><p>Express JS</p><hr style={{width:"70%"}} /></div>
                    <div className='about-skill'><p>Redux</p><hr style={{width:"70%"}} /></div>
                    <div className='about-skill'><p>Mongo DB</p><hr style={{width:"75%"}} /></div>
                    <div className='about-skill'><p>NEXT JS</p><hr style={{width:"100%"}} /></div>
                    <div className='about-skill'><p>Python</p><hr style={{width:"75%"}} /></div>
                    <div className='about-skill'><p>Django</p><hr style={{width:"85%"}} /></div>
                </div>
            </div>
        </div>
                <div className='about-achivements'>
                    <div className='about-achivement'>
                        <h1>3+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className='about-achivement'>
                        <h1>5+</h1>
                        <p>PROJECTS</p>
                    </div>
                    <hr />
                    <div className='about-achivement'>
                        <h1>5+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                </div>

    </div>
  )
}

export default About