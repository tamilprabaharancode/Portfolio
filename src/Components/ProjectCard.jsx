import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, img, desc, link }) => {
  return (
   
    <div className="project-card">
      <img src={img} alt={title} className="project-img" />
      <h3>{title}</h3>
      <p>{desc}</p>

      <a href={link} target="_blank" rel="noopener noreferrer" className="project-btn">
        View Project
      </a>
    </div>
    
  );
};

export default ProjectCard;
