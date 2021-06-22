import React, { useState } from 'react'
import "./admin.css";

const AdminLogin = () => {

  const [logInId, setLogInId] = useState("");
  const [password, setPassword] = useState("");

  const adminLogin = async (e) =>{
    e.preventDefault();

    const data = await fetch("http://localhost:4000/brand", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        logInId,
        password
      })
    });
    const res = await data.json();
    if (res.statusCode === 400 || !res) {
      alert("YoutubeLink is already exist");
      return;
    } else {
      alert("Data Successfully Saved!!");
    }
  };

    return (
        <div method="POST">
          <div className="Admin__Login">
            <input
              className="Log__in"
              name="loginId"
              type="text"
              placeholder="Login ID"
              onchange={(e)=>setLogInId(e.target.value)}
            />

            <input
              className="Log__in"
              name="password"
              type="password"
              placeholder="Login Password"
              onchange={(e)=>setPassword(e.target.value)}
            />

            <button onClick={adminLogin} className="Log__in" style={{ backgroundColor: "lightgreen" }}>
              Submit
            </button>
          </div>
        </div>
    )
}

export default AdminLogin
