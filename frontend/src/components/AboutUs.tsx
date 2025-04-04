import React from "react";
import { useNavigate } from 'react-router-dom';  // Add this import
import gunjan from "../assets/Gunjan.jpg";
import shivansh from "../assets/shivansh.png";
import "../styles/AboutUs.css";
import loginBg from '../assets/login.jpeg'; 
import vishal from "../assets/vishal.png";

const AboutUs: React.FC = () => {
  const navigate = useNavigate();  // Now this will work
  
  return (
    <div className="page-container" style={{ backgroundImage: `url(${loginBg})` }}>
    <div className="about-container">
      <nav className="navbar">
        <div className="nav-logo">ClassFlow</div>
        <div className="nav-links">
          <button className="nav-link" onClick={() => navigate('/')}>Home</button>
          <button className="nav-link" onClick={() => navigate('/contact')}>Contact</button>
          <button className="nav-link" onClick={() => navigate('/about')}>About Us</button>
          <button className="login-btn" onClick={() => navigate('/signup  ')}>Sign Up/Log In</button>
        </div>
      </nav>

      <div className="content-container">
        <h1 className="title">About Us</h1>
        <p className="description">
          Welcome to ClassFlow! We are a dedicated team working on creating smart solutions
          for digital learning environments. Our mission is to enhance the education experience 
          with innovative technology.
        </p>

        <div className="team-container">
          <div className="team-member">
            <img className="team-image" src={shivansh} alt="Shivansh" />
            <p className="team-name">Shivansh</p>
          </div>
          <div className="team-member">
            <img className="team-image" src={gunjan} alt="Gunjan" />
            <p className="team-name">Gunjan</p>
          </div>
          <div className="team-member">
            <img className="team-image" src={vishal} alt="Vishal" />
            <p className="team-name">Vishal</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
