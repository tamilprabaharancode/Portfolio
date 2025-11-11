import React,{useState} from 'react'
import backgroundImage from '../images/logo.jpg';
import '../Components/Navbar.css'
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [islists,setislists] = useState(false);
  return (
    <div>
        <div className='navigation' >
         
          <div>
            <img  src={backgroundImage} alt="Background" className="background-image" style={{width:'100px',height:'100px'}}></img>
          <span>M.TAMIL</span><span style={{color:"red",fontFamily:'bold'}}> PRABAHARAN</span>
          </div>

          <ul className= {islists ? 'link-mob' : 'lists'} onClick={()=>setislists(false)}>
          <li><Link to='/' className='Home'>Home</Link></li>
          <li><Link to='/About' className='About'>About</Link></li>
          <li><Link to='/Contact' className='Contact'>Contact</Link></li>
          <li><Link to='/skills' className='Skills'>Skills</Link></li>
          <li><Link to='/project' className='Project'>Project</Link></li>
          </ul>
          
          <button style={{fontSize:'bold'}}>
            <Link  to='/Contact' style={{textDecoration: 'none'}}>Contact Me</Link>
            </button>
          
          <button className='slide-btn' onClick={() => setislists(!islists)}>{islists ? <h1>x</h1> : <h1>☰</h1>}</button>

        </div>
    </div>
  )
}

export default Navbar
