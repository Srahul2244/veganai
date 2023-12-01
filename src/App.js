import React from "react";
import Dates from "./pages/Date";
import MainRoutes from "./components/MainRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <MainRoutes />
      <ToastContainer/>
      <Dates/>
     
    </div>
  );
}

export default App;
