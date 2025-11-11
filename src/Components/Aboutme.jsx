import React from 'react'
import './Aboutme.css';
import backgroundVideo from '../images/background.mp4';
import { BiCode } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";



const Aboutme = () => {
  return (
    <div className='about'>
      <center>
         <div className='vid'>
                <video autoPlay loop muted className="background-video" style={{width:'100%',height:'100%',zIndex:'-10'}}>
                <source src={backgroundVideo} type="video/mp4" />
                </video>
          </div>
          <div style={{margin:'10% 0'}} className="page-animate">
      <h1 className='ab'>About Me</h1>

      <div className='intro'>
        <p>
          I’m a self-motivated Web Developer specializing in frontend development.
          As a fresher, I focus on creating modern, responsive, and visually appealing websites.
          I enjoy solving problems, designing UI, and turning ideas into real web applications.
          I’m looking for opportunities to grow and contribute to a dynamic development team.
        </p>
      </div>

      <div  style={{margin:'0 20%'}} className='over1'>
          <div className='.cad' style={{margin:'0 20%',display:'flex',flexWrap:'nowrap',overflowX:'auto',justifyContent:'center',gap:'20px'}}>
            <div className="hover-card">
              <h3 style={{display:'flex',alignItems:'center',justifyContent:'center'}}><BiCode size={30} />Web Development</h3>
              <p>Creating responsive website and web applications with modern frame work.</p>
            </div>
            <div className="hover-card">
              <h3 style={{display:'flex',alignItems:'center',justifyContent:'center'}}><FiUser size={28} />UI/UX Design</h3>
              <p>Designing intuitive user interfaces and seamless user experiences.</p>
            </div>
            <div className="hover-card">
              <h3 style={{display:'flex',alignItems:'center',justifyContent:'center'}}><FiBriefcase size={30} />Project Management</h3>
              <p>Leading projects from conception to completion with agile methodologies.</p>
            </div>
          </div>
        </div>
      </div>
      </center>
    </div>
  )
}

export default Aboutme;
