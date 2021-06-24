import Header from "./Header";
import React, { useState } from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

const BrandLogin = () => {
  const history = useHistory();
  const [logInId, setLogInId] = useState("");
  const [password, setPassword] = useState("");

  const adminLogin = async (e) =>{
    e.preventDefault();

    const data = await fetch("http://localhost:4000/signIn", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        logInId,
        password
      })
    });
    const res = await data.json();
    console.log(res)
    if (res.statusCode === 400 || !res) {
      alert("Invalid Credentials");
    } else {
      alert("Logged In!!");
      history.push("/") //mention path whereever you want to redirect
    }
  };

  return (
    <>
      <Header />
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
          className="formbox"
          style={{ backgroundColor: "orange" }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default BrandLogin;
