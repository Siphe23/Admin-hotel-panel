// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminHome from './pages/AdminHome';
import AdminDashboard from './pages/AdminDashboard';
import AdminProfile from './pages/AdminProfile';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'; // Import useSelector to get authentication state

const App = () => {
  // Assuming you have an auth slice that tracks the user state
  const { currentUser } = useSelector((state) => state.auth);

  const isAuthenticated = !!currentUser; // Determine authentication based on currentUser

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          {/* Redirects for non-authenticated users can be added */}
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;


