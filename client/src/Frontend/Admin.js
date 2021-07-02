import React from "react";
import Header from "./Header";
import AdminMaster from "./AdminMaster";

import "./admin.css";
const Admin = () => {
  
  return (
    <div>
      <Header />
      {/* <h3>ADMIN SCREEN</h3> */}
      <div className="Admin__scren">
        <AdminMaster />
      </div>
    </div>
  );
};

export default Admin;
