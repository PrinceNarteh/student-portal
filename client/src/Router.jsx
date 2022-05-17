import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import RegisterStudent from "./pages/RegisterStudent";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="register-student" element={<RegisterStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
