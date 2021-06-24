import React from "react";
import Header from "./Header";
import AdminMaster from "./AdminMaster";
import AdminLogin from "./AdminLogin";
import AdminNotMaster from "./AdminNotMaster";
import View from "../view/View";

import "./admin.css";
const Admin = () => {
  const master = 1;
  const user =1;
  return (
    <div>
      <Header />
      <h3>ADMIN SCREEN</h3>
      <div className="Admin__scren">
        {!user ? <AdminLogin /> : (master ? <><AdminMaster /><View/></> : <AdminNotMaster />)}
      </div>
    </div>
  );
};

export default Admin;
