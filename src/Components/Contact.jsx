import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import backgroundVideo from '../images/background.mp4';
import { FaInstagram ,FaFacebook,FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import './Contact.css';


const Contact = () => {

   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_269m3gv', 'template_8zj6x5g', form.current, {
        publicKey: 'qAtXd5IFFRk8-NfI5',
      })
      .then(
        () => {
           console.log('SUCCESS!');
           alert('Message sent successfully!'); 
           e.target.reset();
        },(error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <div className='contact'>
       
      <video autoPlay loop muted className="background-video" style={{width:'100%',height:'100%',zIndex:'-10'}}>
      <source src={backgroundVideo} type="video/mp4" />
      </video>

      <h1  className="typing" style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'100px 0',textAlign:'center'}}>Get in touch</h1>
      <div style={{margin:'50px 20px',display:'flex',gap:'20px'}}>
        <div style={{width:'50%'}} className='min'>
          
          <h2>Let's Talk</h2>
          <p style={{color:'black',fontWeight:'bold'}}>I'm currently available to take on new project,so feel free to send me a message about anything that want me to work on.You can contact anytime.</p>
          <div style={{display:'flex',alignItems:'center',gap:'20px',flexWrap:'nowrap',overflowX:'auto'}}><FaEnvelope size={30} /><p style={{color:'black',fontWeight:'bold'}}>www.tamilprabaharancivil@gmail.com</p></div>
          <div style={{display:'flex',alignItems:'center',gap:'20px',flexWrap:'nowrap',overflowX:'auto'}}><FaPhone size={30}  /><p style={{color:'black',fontWeight:'bold'}}>+91 9597944372</p></div>
          <div style={{display:'flex',alignItems:'center',gap:'20px',flexWrap:'nowrap',overflowX:'auto'}}><GoLocation size={30} /><p style={{color:'black',fontWeight:'bold'}}>6,thiruvalluvar nagar,velayuthampalayam,karur</p></div>
          <div style={{display:'flex',alignItems:'center',gap:'20px'}} className='icon'>
          <a href="https://www.linkedin.com/in/tamilprabaharancode/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{color:'black'}}/></a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} style={{color:'black'}}/></a>
          <a href="https://www.facebook.com/profile.php?id=61578098643457" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} style={{color:'black'}}/></a>
          <a href="https://www.instagram.com/tamilprabaharancivilengineer/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} style={{color:'black'}}/></a></div>
        </div>
        <div style={{width:'50%'}}>
          <form ref={form} onSubmit={sendEmail}>
          <label  style={{color:'black',fontWeight:'bold',margin:'20px 0'}}>your name</label><br></br>
          <input placeholder='Enter your name'  type="text" name="from_name"  style={{margin:'10px 0',width:'80%',height:'30px',borderRadius:'8px',textAlign:'center'}}></input><br></br>
          <label  style={{color:'black',fontWeight:'bold'}}>your Email</label><br></br>
          <input placeholder='Enter your email' type="email" name="from_email" style={{margin:'10px 0',width:'80%',height:'30px',borderRadius:'8px',textAlign:'center'}}></input><br></br>
          <label  style={{color:'black',fontWeight:'bold'}}>write your message here</label><br></br>
          <input placeholder='Enter your message'  name="message" style={{margin:'10px 0',width:'80%',height:'150px',borderRadius:'8px',textAlign:'center'}}></input><br></br>
          <input   type="submit" value="Send" style={{width:'100px',height:'50px',borderRadius:'8px'}} className='bt'></input>
          </form>
        </div>
      </div>
       
    </div>
  )
}

export default Contact
