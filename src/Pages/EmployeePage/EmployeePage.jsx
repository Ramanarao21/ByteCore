import React from 'react';
import './EmployeePage.css'; 

const EmployeePage = () => {

  const fortiGuardTasks = [
    "Conduct a vulnerability assessment on client networks.",
    "Develop security documentation for new software updates.",
    "Test firewall configurations and report any anomalies.",
    "Assist in the integration of new security tools."
  ];

  const shieldNetTasks = [
    "Analyze data logs for potential threats.",
    "Implement AI algorithms for threat detection.",
    "Create user guides for software usage.",
    "Collaborate on code reviews for system updates."
  ];

  return (
    <div className="employee-page">
      <h1 className='tasks-mainhead'>Task Dashboard</h1>

      
      <div className="task-section">
        <h2 className="section-heading">FortiGuard Tickets</h2>
        <div className="tasks-grid">
          {fortiGuardTasks.map((task, index) => (
            <div className="task-card" key={index}>
              <p className="task-heading">Task {index + 1}</p>
              <p>{task}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="task-section">
        <h2 className="section-heading">ShieldNet Tickets</h2>
        <div className="tasks-grid">
          {shieldNetTasks.map((task, index) => (
            <div className="task-card" key={index}>
              <p className="task-heading">Task {index + 1}</p>
              <p>{task}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
