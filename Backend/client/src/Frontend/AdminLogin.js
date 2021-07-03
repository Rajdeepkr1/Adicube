import React, { useContext, useState } from 'react'
import { Context } from '../context/Context';
import "./admin.css";
import AdminMaster from "./AdminMaster";
import AdminNotMaster from "./AdminNotMaster";

const AdminLogin = () => {
  const [logInId, setLogInId] = useState("");
  const [password, setPassword] = useState("");
  const {user, dispatch, isFetching} = useContext(Context)

  const adminLogin = async (e) =>{
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
     const data = await fetch("http://localhost:4000/signIn", {
      // const data = await fetch("/signIn", {
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
      dispatch({type: "LOGIN_FAILURE"})
      return;
    } else {
      alert("Logged In!!");
      // setMaster(true)
      dispatch({type: "LOGIN_SUCCESS", payload: res.userlogin})

      // history.push("http://localhost:3000/Admin")
    }
  };
    return (<>
      {!user ?
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

            <button onClick={adminLogin} disabled={isFetching} className="Log__in" style={{ backgroundColor: "lightgreen" }}>
              Submit
            </button>
          </div>
        </div>
    : user.master==="TRUE"?<AdminMaster />:
    <AdminNotMaster/> 
      }     
      </>  
        )
}

export default AdminLogin
