import React from "react";
import MainRoutes from "./components/MainRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <MainRoutes />
      <ToastContainer/>
    </div>
  );
}

export default App;
