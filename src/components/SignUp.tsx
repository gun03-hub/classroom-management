import loginBg from '../assets/login.jpeg';
import rectangle from '../assets/Rectangle 9.png';
import character from '../assets/char1.png';
import Elipse from '../assets/Ellipse 6.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const handleLoginClick = () => {
    setAnimate(true);
    setTimeout(() => navigate('/login'), 500);
  };

  return (
    <div className="page-container" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className={`flex-container ${animate ? 'slide-out' : 'slide-in'}`}>
        <div className="login-container">
          <div className="signup-form" style={{ backgroundImage: `url(${rectangle})` }}>
            <h2>Sign Up</h2>
            <p>Create an Account</p>
            <form>
              <div className="form-group">
                <input type="text" placeholder="First Name" className="input-field" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" className="input-field" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" className="input-field" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email-Id" className="input-field" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" className="input-field" />
              </div>
              <button type="submit" className="login-button">Sign Up</button>
              <div className="login-links">
                <p className="text-center">
                  Already have an account? 
                  <span onClick={handleLoginClick} className="login-link">Login</span>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="character-container" style={{ backgroundImage: `url(${Elipse})` }}>
          <img src={character} alt="Character" className="character-image" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;