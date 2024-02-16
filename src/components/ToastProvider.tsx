import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const ToastProvider = () => {
  return (
    <ToastContainer autoClose={3000}/>
  )
}

export default ToastProvider