import React from 'react'
import backgroundVideo from '../images/background.mp4';
import ProjectCard from "./ProjectCard";
// import backgroundImage from '../images/logo.jpg';
import Calculator from '../images/Calculater_App.jpeg';
import Weather from '../images/Weather_App.jpeg';
import Game from '../images/Number_game.jpeg';
import Textile from '../images/Textile.png';



const Project = () => {
   const data = [
    {
      title: "Weather App",
      img: Weather,
      desc: "A weather forecasting app made using API.",
      link: "https://tamilprabaharancode.github.io/WeatherApp/"
    },
    {
      title: "Textile Bussines",
      img: Textile,
      desc: "A simple recrating website using HTML,CSS,JS.",
      link: "https://tamilprabaharancode.github.io/Tamil-Prabaharan-recreate-cotton-website/"
    },
        {
      title: "Number Guess Game",
      img: Game,
      desc: "A Number Gussing Game app using MERN stack.",
      link: "https://tamilprabaharancode.github.io/numbergeuss/"
    },
    {
      title: "Calculator",
      img: Calculator,
      desc: "A simple and scientific calculator using html,css and js.",
      link: "https://tamilprabaharancode.github.io/Calculater/"
    }
  ];

  return (
    <div className='project'>

        <video autoPlay loop muted className="background-video" style={{width:'100%',height:'100%',zIndex:'-10'}}>
        <source src={backgroundVideo} type="video/mp4" />
        </video>
      
       <div>
       <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'100px 0'}}>Featured Projects</h1>
        <div className="projects-grid" style={{display:'flex',justifyContent:'center',margin:'50px 0',gap:'50px',overflowX: "auto",flexWrap: "nowrap"}}>
          {data.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              img={project.img}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
