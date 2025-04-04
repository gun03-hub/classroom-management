import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import Axios
import loginBg from '../assets/login.jpeg';
import rectangle from '../assets/Rectangle 9.png';
import character from '../assets/char1.png';
import Elipse from '../assets/Ellipse 6.png';
import '../styles/Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/login/', { email, password });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token); // Store token
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      setError('Invalid credentials or server error');
    }
  };

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
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Email-Id" 
                  className="input-field" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  className="input-field" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <div className="show-password">
                <input 
                  type="checkbox" 
                  id="showPassword" 
                  checked={showPassword} 
                  onChange={() => setShowPassword(!showPassword)} 
                />
                <label htmlFor="show">Show Password</label>
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
