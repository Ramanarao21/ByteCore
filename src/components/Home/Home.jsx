import React from 'react';
import './Home.css';
import assets from '../../assets/assets';

const Home = () => {
  return (
    <div className="homepage">
  
      <section className="hero-section">
        <div>
        <img src= {assets.companylogo} className='company-img'/>
        </div>
        <div>
        <h1>Welcome to ByteCore</h1>
        <p>Securing the Future with Innovative Solutions and Trusted Expertise</p>
        <button className="cta-button">Learn More</button>

        </div>
        
        
      </section>


      <section className="about-section">
        <h2>Who We Are</h2>
        <p>ByteCore is dedicated to providing top-tier cybersecurity solutions, ensuring the safety and integrity of digital assets. With innovation at its core, ByteCore leverages cutting-edge technology and AI-driven strategies to protect against evolving cyber threats. Our commitment to teamwork and continuous improvement empowers businesses to build secure, resilient digital environments and maintain trust in an increasingly connected world</p>
      </section>

      <section className="projects-section">
        <h2>Our Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>FortiGuard</h3>
            <p>Managed by: John Doe</p>
            <p>Team: Alice, Bob, Charlie, ...</p>
          </div>
          <div className="project-card">
            <h3>ShieldNet</h3>
            <p>Managed by: Jane Smith</p>
            <p>Team: Eve, Frank, Grace, ...</p>
          </div>
        </div>
      </section>


      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          
          <div className="team-member">
            <h3>John Doe</h3>
            <p>Project Manager</p>
          </div>
          <div className="team-member">
            <h3>Jane Smith</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </section>

  
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Email: contact@bytecore.com</p>
        <button className="cta-button">Contact Us Today</button>
      </section>

  
      <footer className="footer">
        <p>ByteCore © 2024 | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
