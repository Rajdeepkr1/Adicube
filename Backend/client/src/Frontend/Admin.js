import React from "react";
import Header from "./Header";
import AdminMaster from "./AdminMaster";
import AdminLogin from "./AdminLogin";
import AdminNotMaster from "./AdminNotMaster";
import "./admin.css";
const Admin = () => {
  const master = 1;
  return (
    <div>
      <Header />
      <h3>ADMIN SCREEN</h3>
      <div className="Admin__scren">
        {!master ? <AdminLogin /> : <><AdminMaster /> <AdminNotMaster /></>}
      </div>
    </div>
  );
};

export default Admin;
