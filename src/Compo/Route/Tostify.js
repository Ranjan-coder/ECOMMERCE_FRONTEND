import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

function Tostify() {
  const notify = () => {
    toast.info('Hello, world!');
  };

  return (
    <div>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default Tostify;
