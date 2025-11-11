import React from 'react'
import Navbar from './Navbar'
import backgroundVideo from '../images/background.mp4';
import backgroundImage from '../images/intro.jpg';
import './Home.css'


const Home = () => {

    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Filescv/sample.pdf";
    link.download = "sample.pdf";
    link.click();
  };

  return (
    <div className='home ' >
      <div className='vid'>
        <video autoPlay loop muted className="background-video" style={{width:'100%',height:'100%',zIndex:'-10'}}>
        <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className='nav'><Navbar></Navbar></div>
      <div className='intro' style={{marginTop:'300px',zIndex:'10'}}>
        <div className="page-enter" style={{width:'50%'}}>
          <h3>Hello It's me</h3><h1>Tamil Prabaharan</h1><h3>And I'm a </h3><h3 className="typewriter">Fullstack web developer</h3>
          <button onClick={handleDownload}>Resume cv</button>
        </div>
        <div className='pentagon-image-container' style={{width:'50%'}}>
          <img  src={backgroundImage} alt="Background1" className="background-image1 image-pop" ></img>
        </div>
      </div>
    </div>
  )
}

export default Home
