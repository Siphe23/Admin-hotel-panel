import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase'; // Ensure this exports your Firebase auth instance
import { setCurrentUser } from '../features/authSlice'; // Redux slice to manage auth state

const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setCurrentUser(userCredential.user)); // Dispatch the user to the Redux store
      navigate('/dashboard'); // Redirect to the dashboard after signup
    } catch (err) {
      setError(err.message); // Set the error message if signup fails
    }
  };

  return (
    <div>
      <h2>Admin Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p>{error}</p>} {/* Display any errors */}
    </div>
  );
};

export default AdminSignup;
