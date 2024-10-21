import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Import Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import ToastNotification from './Components/ToastNotification';
import AdminLogin from './Components/AdminLogin';
import AdminSignup from './Components/AdminSignup';
import AccommodationForm from './Components/AccommodationForm';
import ReservationList from './Components/ReservationList';

// Import Pages
import AdminHome from './pages/AdminHome';
import Dashboard from './pages/Dashboard';
import EditAccommodation from './pages/EditAccommodation';
import ManageReservations from './pages/ManageReservations';

const App = () => {
  
  useEffect(() => {
    // Example toast notification when app loads
    toast.success('Welcome to Admin Panel!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Navbar and Sidebar will be shown on all pages */}
        <Navbar />
        <Sidebar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/edit-accommodation/:id" element={<EditAccommodation />} />
          <Route path="/manage-reservations" element={<ManageReservations />} />
          <Route path="/add-accommodation" element={<AccommodationForm />} />
          <Route path="/reservation-list" element={<ReservationList />} />
        </Routes>

        {/* Footer will be shown on all pages */}
        <Footer />

        {/* ToastContainer for toast messages */}
        <ToastContainer />
        {/* Optionally include a custom ToastNotification component */}
        <ToastNotification />
      </div>
    </Router>
  );
}

export default App;



