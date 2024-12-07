import React from "react";
import './ManagerPage.css';

const ManagerPage = ({ data }) => {
  return (
    <>
    <h1>Manager Page</h1>
    <div className="manager-page">
      
      {data.projects.map((project) => (
        <div className="project-card" key={project.id}>
          <h2 className="project-name-manager">{project.name}</h2>
          <p><strong>Admin:</strong> {project.admin}</p>
          <p><strong>Team:</strong> {project.team.join(", ")}</p>
          <p><strong>Total Tasks:</strong> 5</p>
          <p><strong>Completd Tasks:</strong> 2</p>
        </div>
      ))}
    </div>
    
    </>
    
  );
};

export default ManagerPage;
