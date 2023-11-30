import React from "react";
import { Route, Routes } from "react-router-dom";
import NewContact from "../pages/NewContact";
import Mobile from "./Mobile";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewContact />} />
        <Route path="/mobile" element={<Mobile />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
