import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import 'react-toastify/dist/ReactToastify.css';

import AdminLayout from "layouts/Admin.js";
import SuperAdminLayout from "layouts/SuperAdmin.js";
import StudentLayout from "layouts/Student.js";
import AuthLayout from "layouts/Auth.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/superAdmin/*" element={<SuperAdminLayout />} />
      <Route path="/student/*" element={<StudentLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  </BrowserRouter>
);
