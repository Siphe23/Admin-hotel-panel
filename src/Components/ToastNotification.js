import React from 'react';
import { ToastContainer, Toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = ({ message }) => {
  return (
    <ToastContainer>
      <Toast>{message}</Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
