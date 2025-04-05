import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginBg from '../assets/login.jpeg';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('organization');

  const renderContent = () => {
    switch (activeTab) {
      case 'organization':
        return (
          <>
            <h2>organisation</h2>
            <h3>organisation type</h3>
            <h3>board</h3>
            <div className="department-info">
              <p>all department, total degree,</p>
              <p>total course, total subject,</p>
              <p>total teachers, add department,</p>
              <p>submit</p>
            </div>
          </>
        );
      case 'department':
        return (
          <>
            <h2>Department</h2>
            <h3>department type</h3>
            <h3>board</h3>
            <div className="department-info">
              <p>all department, total degree,</p>
              <p>total course, total subject,</p>
              <p>total teachers, add department,</p>
              <p>submit</p>
            </div>
          </>
        );
      case 'students':
        return (
          <>
            <h2>Students</h2>
            <h3>student details</h3>
            <h3>board</h3>
            <div className="department-info">
              <p>all department, total degree,</p>
              <p>total course, total subject,</p>
              <p>total teachers, add department,</p>
              <p>submit</p>
            </div>
          </>
        );
      case 'attendance':
        return (
          <>
            <h2>Attendance</h2>
            <h3>attendance type</h3>
            <h3>board</h3>
            <div className="department-info">
              <p>all department, total degree,</p>
              <p>total course, total subject,</p>
              <p>total teachers, add department,</p>
              <p>submit</p>
            </div>
          </>
        );
      case 'applications':
        return (
          <>
            <h2>Applications</h2>
            <h3>application type</h3>
            <h3>board</h3>
            <div className="department-info">
              <p>all department, total degree,</p>
              <p>total course, total subject,</p>
              <p>total teachers, add department,</p>
              <p>submit</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="sidebar">
        <div className="logo">ClassFlow</div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'organization' ? 'active' : ''}`}
            onClick={() => setActiveTab('organization')}
          >
            Organization
          </button>
          <button 
            className={`nav-item ${activeTab === 'department' ? 'active' : ''}`}
            onClick={() => setActiveTab('department')}
          >
            Department
          </button>
          <button 
            className={`nav-item ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            Students
          </button>
          <button 
            className={`nav-item ${activeTab === 'attendance' ? 'active' : ''}`}
            onClick={() => setActiveTab('attendance')}
          >
            Attendance
          </button>
          <button 
            className={`nav-item ${activeTab === 'applications' ? 'active' : ''}`}
            onClick={() => setActiveTab('applications')}
          >
            Applications
          </button>
        </nav>
      </div>

      <div className="main-content">
        <div className="user-info">
          <div className="user-details">
            <div>First Name: Demo</div>
            <div>Last Name: Demo</div>
            <div>Email-id: Demo</div>
            <div>Phone: Demo</div>
          </div>
        </div>

        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;