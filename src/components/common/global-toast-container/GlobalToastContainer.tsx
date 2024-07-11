import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const GlobalToastContainer: React.FC = () => {
  return (
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
  )
}

export default GlobalToastContainer