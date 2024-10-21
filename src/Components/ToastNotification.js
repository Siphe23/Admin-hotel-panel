import React from 'react';
import { toast } from 'react-toastify';  // Correct import, 'toast' is the method
import 'react-toastify/dist/ReactToastify.css'; // Ensure you're importing the CSS

const ToastNotification = () => {

  const notifySuccess = () => {
    toast.success('This is a success message!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = () => {
    toast.error('This is an error message!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <button onClick={notifySuccess}>Show Success Toast</button>
      <button onClick={notifyError}>Show Error Toast</button>
    </div>
  );
};

export default ToastNotification;
