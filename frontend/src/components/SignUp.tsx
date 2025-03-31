import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import Axios
import loginBg from '../assets/login.jpeg';
import rectangle from '../assets/Rectangle 9.png';
import character from '../assets/char1.png';
import Elipse from '../assets/Ellipse 6.png';
import './SignUp.css';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLoginClick = () => {
    setAnimate(true);
    setTimeout(() => navigate('/login'), 500);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/signup/', {
        first_name: firstName,
        last_name: lastName,
        phone,
        email,
        password
      });

      if (response.status === 201) {
        setSuccess('Account created successfully! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(response.data.message || 'Signup failed');
      }
    } catch (err) {
      setError('Signup failed. Please check your input.');
    }
  };

  return (
    <div className="page-container" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className={`flex-container ${animate ? 'slide-out' : 'slide-in'}`}>
        <div className="signup-container">
          <div className="signup-form" style={{ backgroundImage: `url(${rectangle})` }}>
            <h2>Sign Up</h2>
            <p>Create an Account</p>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <form onSubmit={handleSignUp}>
              <div className="form-group">
                <input type="text" placeholder="First Name" className="input-field" 
                  value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" className="input-field" 
                  value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" className="input-field" 
                  value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email-Id" className="input-field" 
                  value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" className="input-field" 
                  value={password} onChange={(e) => setPassword(e.target.value)} required />
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
