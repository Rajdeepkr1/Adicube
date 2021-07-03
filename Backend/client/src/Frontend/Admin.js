import React from "react";
import Header from "./Header";
import AdminLogin from "./AdminLogin";

import "./admin.css";
const Admin = () => {
  
  return (
    <div>
      <Header />
      <div className="Admin__scren">
        <AdminLogin />
      </div>
    </div>
  );
};

export default Admin;
