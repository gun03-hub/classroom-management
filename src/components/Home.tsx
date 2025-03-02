import React, { useState, useEffect } from 'react';
import loginBg from '../assets/login.jpeg';
import character from '../assets/char1.png';
import teachersChar from '../assets/teachers.png';
import adminChar from '../assets/admin.jpg';
import './Home.css';
import { useNavigate } from 'react-router-dom';  // Add this import at the top

const Home: React.FC = () => {
  const navigate = useNavigate();  // Add this hook
  const [activeTab, setActiveTab] = useState<'students' | 'teachers' | 'administration'>('students');
  
  const [key, setKey] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveTab((prevTab) => {
      const nextTab = prevTab === 'students' ? 'teachers' : prevTab === 'teachers' ? 'administration' : 'students';
      setKey((prevKey) => prevKey + 1); // Force re-render
      return nextTab;
    });
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="page-container" style={{ backgroundImage: `url(${loginBg})` }}>
      <nav className="navbar">
        <div className="nav-logo">ClassFlow</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About Us</a>
          <button className="login-btn" onClick={() => navigate('/login')}>Sign Up/Log In</button>
        </div>
      </nav>
      <div className="flex-container slide-in"> 
        {activeTab === 'students' ? (
          <>
            <div className="content-left">
              <h1>WHAT WE OFFER:</h1>
              <h2>For Students – Learn & Grow Effortlessly!</h2>
              <p>
              We provide the tools to access learning materials, submit assignments, track progress, and get academic support seamlessly.<br></br>
              ✔ Learning Resources – View and download study materials.
                <br></br>
                ✔ Assignments & Feedback – Submit work online and receive evaluations.
                <br></br>
                ✔ Attendance & Performance Tracking – Stay updated on your progress.
                <br></br>
                ✔ AI Chat Support – Get instant academic assistance.
                <br></br>
                Unlock your potential with ClassFlow!
              </p>
            </div>
            <div className="character-container">
              <img src={character} alt="Character" className="character-image" />
            </div>
          </>
        ) : activeTab === 'teachers' ? (
          <>
            <div className="content-left">
              <h1>WHAT WE OFFER:</h1>
              <h2>For Teachers – Teach Smarter, Not Harder!</h2>
              <p>
              Simplify teaching with efficient course management, student tracking, and automated tools.<br></br>
              ✔ Assignments & Grading – Create, review, and grade effortlessly.
                <br></br>
                ✔ Attendance Management – Mark and track attendance in real-time.
                <br></br>
                ✔ Student Progress Insights – Monitor and analyze performance data.
                <br></br>
                ✔ AI Chat Support – Resolve queries quickly with smart assistance.
                <br></br>
                Enhance your teaching experience with ClassFlow!
              </p>
            </div>
            <div className="character-container1">
              <img src={teachersChar} alt="Teachers Character" className="character-image" />
            </div>
          </>
        ) : (
          <>
            <div className="content-left">
              <h1>WHAT WE OFFER:</h1>
              <h2>For Administration – Efficiently Manage Operations!</h2>
              <p>
              Streamline school administration with powerful tools for managing records, staff, and student data.<br></br>
              ✔ Student & Staff Management – Keep track of attendance and performance.
                <br></br>
                ✔ Financial & Fee Management – Handle school finances seamlessly.
                <br></br>
                ✔ Communication Portal – Connect with teachers, students, and parents.
                <br></br>
                ✔ AI-Powered Insights – Generate reports and data analytics for decision-making.
                <br></br>
                Optimize administration with ClassFlow!
              </p>
            </div>
            <div className="character-container2">
              <img src={adminChar} alt="Administration Character" className="character-image" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
