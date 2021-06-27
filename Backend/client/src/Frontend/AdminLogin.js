import React, { useState } from 'react'
import "./admin.css";
import View from "../view/View";
import AdminMaster from "./AdminMaster";


const AdminLogin = () => {
  const [logInId, setLogInId] = useState("");
  const [password, setPassword] = useState("");
  const [master, setMaster] = useState(false);

  const adminLogin = async (e) =>{
    e.preventDefault();

    const data = await fetch("http://localhost:4000/signIn", {
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
      alert("Invalid Credentials");
      return;
    } else {
      alert("Logged In!!");
      setMaster(true)
      // history.push("http://localhost:3000/Admin")
    }
  };

    return (<>
      {!master ?
        <div method="POST">
          <div className="Admin__Login">
            <input
              className="Log__in"
              name="loginId"
              type="text"
              placeholder="Login ID"
              onChange={(e)=>setLogInId(e.target.value)}
            />

            <input
              className="Log__in"
              name="password"
              type="password"
              placeholder="Login Password"
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button onClick={adminLogin} className="Log__in" style={{ backgroundColor: "lightgreen" }}>
              Submit
            </button>
          </div>
        </div>
    : <><AdminMaster /><View/></>
      }     
      </>  
        )
}

export default AdminLogin
