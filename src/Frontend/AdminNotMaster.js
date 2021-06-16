import React from "react";
import "./admin.css";
const AdminNotMaster = () => {
  return (
    <div>
      <div className="Not__master">
        <h3>IF NOT A MASTER USER</h3>
        <h4>Channal Search</h4>
        <input className="Log__in" type="text" placeholder="Channal Search" />

        <button className="Log__in" style={{ backgroundColor: "lightgreen" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdminNotMaster;
