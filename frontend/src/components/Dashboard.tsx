import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginBg from '../assets/login.jpeg';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard" style={{ 
      backgroundImage: `url(${loginBg})`,
      backgroundSize: 'cover',
      minHeight: '100vh'
    }}>
      <nav className="navbar">
        <div className="nav-logo">ClassFlow</div>
        <div className="nav-links">
          <button className="nav-link" onClick={() => navigate('/')}>Home</button>
          <button className="nav-link" onClick={() => navigate('/contact')}>Contact</button>
          <button className="nav-link" onClick={() => navigate('/about')}>About Us</button>
          <button className="login-btn" onClick={() => navigate('/signup')}>Sign Up/Log In</button>
        </div>
      </nav>

      {/* Add your dashboard content here */}
      
    </div>
  );
};

export default Dashboard;