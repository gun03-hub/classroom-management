import loginBg from '../assets/login.jpeg';
import rectangle from '../assets/Rectangle 9.png';
import character from '../assets/char1.png';
import Elipse from '../assets/Ellipse 6.png';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="page-container" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className={`flex-container ${animate ? 'cross-enter' : ''}`}>
        <div className="character-container" style={{ backgroundImage: `url(${Elipse})` }}>
          <img src={character} alt="Character" className="character-image" />
        </div>

        <div className="login-container cross-left">
          <div className="login-form" style={{ backgroundImage: `url(${rectangle})` }}>
            <h2>Log In</h2>
            <p>Login to your Account</p>
            <form>
              <div className="form-group">
                <input type="email" placeholder="Email-Id" className="input-field" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" className="input-field" />
              </div>
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <button type="submit" className="login-button">Log In</button>
              <div className="login-links">
                <Link to="/signup">Create an Account</Link>
                <br />
                <a href="#">Forget Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;