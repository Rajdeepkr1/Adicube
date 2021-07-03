import Header from "./Header";
import React, { useState, useContext } from "react";
import { Context } from '../context/Context';
import "./Header.css";
import View from "../view/View";

const BrandLogin = () => {
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

  return (
    <>
      <Header />
      {!user? 
      <div method="POST" className="BrandLogin">
        <h1 style={{ color: "white", fontWeight: "bold" }}>Brand Login</h1>
        <div className="BrandLogin__box">
          <input
            className="formbox"
            name="loginId"
            type="email"
            placeholder="Login ID*"
            onChange={(e)=>setLogInId(e.target.value)}
          />
          <input
            className="formbox"
            name="password"
            type="password"
            placeholder="Login Password*"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={adminLogin} 
          disabled={isFetching}
          className="formbox"
          style={{ backgroundColor: "orange" }}
        >
          Submit
        </button>
        </div>
        : <View user={user}/>
        }
    </>
  );
};

export default BrandLogin;
