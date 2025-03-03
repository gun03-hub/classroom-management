import React from 'react';
import loginBg from '../assets/login.jpeg';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Reuse the same CSS file

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container" style={{ backgroundImage: `url(${loginBg})` }}>
      <nav className="navbar">
        <div className="nav-logo">ClassFlow</div>
        <div className="nav-links">
          <button className="nav-link" onClick={() => navigate('/')}>Home</button>
          <button className="nav-link" onClick={() => navigate('/contact')}>Contact</button>
          <button className="nav-link" onClick={() => navigate('/about')}>About Us</button>
          <button className="login-btn" onClick={() => navigate('/login')}>Sign Up/Log In</button>
        </div>
      </nav>
      <div className="flex-container slide-in">
        {/* Your About Us content here */}
      </div>
    </div>
  );
};

export default AboutUs;