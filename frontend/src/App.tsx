import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';// Verify this path is correct
import AboutUs from './components/AboutUs';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<AboutUs/>} /> {/* Changed from /about to /about-us for consistency */}
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard/>} /> {/* Changed from /dashboard to /dashboard for consistency */   }
      </Routes>
    </BrowserRouter>
  );
}

export default App;