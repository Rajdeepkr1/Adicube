import React from 'react'
import "./admin.css";

const AdminLogin = () => {
    return (
        <div>
            <div className="Admin__Login">
          <input
            className="Log__in"
            name="loginId"
            type="text"
            placeholder="Login ID"
          />

          <input
            className="Log__in"
            name="password"
            type="password"
            placeholder="Login Password"
          />

          <button className="Log__in" style={{ backgroundColor: "lightgreen" }}>
            Submit
          </button>
        </div>
        </div>
    )
}

export default AdminLogin
