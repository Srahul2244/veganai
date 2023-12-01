import React from "react";
import { Route, Routes } from "react-router-dom";
import NewContact from "../pages/NewContact";
import Mobile from "../pages/Mobile";
import Edit from "../pages/Edit";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewContact />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/mobile/:id" element ={<Edit/>}/>
      </Routes>
    </div>
  );
};

export default MainRoutes;
