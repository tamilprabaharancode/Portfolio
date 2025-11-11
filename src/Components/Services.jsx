import React from 'react'
import './Services.css';
import backgroundVideo from '../images/background.mp4';


const Services = () => {
  return (
    <div className='service'>
      <div className='vid'>
              <video autoPlay loop muted className="background-video" style={{width:'100%',height:'100%',zIndex:'-10'}}>
              <source src={backgroundVideo} type="video/mp4" />
              </video>
      </div>
    </div>
  )
}

export default Services
