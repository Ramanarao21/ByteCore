import React from "react";
import './AdminPage.css';

const AdminPage = ({ data }) => {
  if (!data || !data.projects || data.projects.length === 0) {
    return <p className="no-projects">No projects available.</p>;
  }

  return (
    <div className="admin-page-container">
      <div>
      <h1 className="admin-heading">Admin Page</h1>

      </div>
      <div className="cards-con">
      {data.projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2 className="project-title">{project.name}</h2>
          <p className="project-info"><strong>Admin:</strong> {project.admin}</p>
          <p className="project-info"><strong>Team:</strong> {project.team.join(", ")}</p>
          <p className="project-info"><strong>Dead Line:</strong> 1 week</p>
        </div>
      ))}

      </div>
    
  
    </div>
  );
};

export default AdminPage;
