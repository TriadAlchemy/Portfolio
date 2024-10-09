import React from 'react'
import './Services.css'
import {Services_data} from '../assets/services_data'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className='services-title'>
            <h1>Our Services</h1>
        </div>
        <div className='service-container'>
            {Services_data.map((service,index)=>{
              return <div key={index} className='service-format'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
              </div>
            })}
        </div>
    </div>
  )
}

export default Services