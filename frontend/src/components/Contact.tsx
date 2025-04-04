import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginBg from '../assets/login.jpeg';
import contactImage from '../assets/OIP-1.png';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    subject: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact" style={{ 
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

      <div className="main-content">
        <div className="text-section">
          <h1>Get in Touch</h1>
          <p>Want to get in touch? We'd love to hear <br></br>
          from you. Here's how you can reach US.</p>
        </div>

        <div className="contact-container">
          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Email-id</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email-id"
                />
              </div>

              <div className="input-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone"
                />
              </div>

              <div className="input-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>

              <div className="input-group">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Description"
                />
              </div>

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
          
          <div className="image-section">
            <img src={contactImage} alt="Contact Support" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
