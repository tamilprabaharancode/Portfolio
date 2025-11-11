import React ,{ useState } from 'react'
import backgroundVideo from '../images/background.mp4';



const Skills = () => {
  const [visible, setVisible] = useState("All");

  return (
    <div className='skills'>
      <div className='vid'>
                    <video autoPlay loop muted className="background-video" style={{width:'100%',height:'120%',zIndex:'-10'}}>
                    <source src={backgroundVideo} type="video/mp4" />
                    </video>
      </div>
      <div style={{margin:'150px 0'}}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px'}}>
        <button onClick={() => setVisible("Frontend")}>Frontend</button>
        <button onClick={() => setVisible("Backend")}>Backend</button>
        <button onClick={() => setVisible("All")}>All</button>
      </div>
      <div style={{margin:'5px 20%'}}>
        { (visible === "Frontend" || visible === "All") &&
        <div className='into' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <p>HTML, CSS</p>
          <hr className="animated-line" style={{ "--percent": "90%",width:'80%'  }} />
        </div>}

        { (visible === "Frontend" || visible === "All") &&
        <div className='into' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <p>Bootstrap</p>
          <hr className="animated-line" style={{ "--percent": "75%",width:'80%'  }} />
        </div>
        }

        { (visible === "Backend" || visible === "All") &&
        <div className='into' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <p>JavaScript</p>
          <hr className="animated-line" style={{ "--percent": "80%",width:'80%'  }} />
        </div>
        }

        { (visible === "Frontend" || visible === "All") &&
        <div className='into' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <p>React JS</p>
          <hr className="animated-line" style={{ "--percent": "85%",width:'80%'}} />
        </div>
        }
        
        { (visible === "Backend" || visible === "All") &&
        <div className='into' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <p>Node JS</p>
          <hr className="animated-line" style={{ "--percent": "70%",width:'80%'}} />
        </div>
        }
        
        { (visible === "Backend" || visible === "All") &&
        <div className='into' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <p>Express jx</p>
          <hr className="animated-line" style={{ "--percent": "75%",width:'80%'}} />
        </div>
        }
        
        { (visible === "Backend" || visible === "All") &&
        <div className='into' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <p>Mongodb</p>
          <hr className="animated-line" style={{ "--percent": "80%",width:'80%'}} />
        </div>
        }

        { (visible === "Backend" || visible === "All") &&
        <div className='into' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <p>Git/Github</p>
          <hr className="animated-line" style={{ "--percent": "65%",width:'80%'}} />
        </div>
        }
      </div>
    </div>
    </div>
  )
}

export default Skills
