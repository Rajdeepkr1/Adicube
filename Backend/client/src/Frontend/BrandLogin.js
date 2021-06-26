import Header from "./Header";
import React, { useEffect, useState } from "react";
import "./Header.css";
// import { useHistory } from "react-router-dom";
import View from "../view/View";

const BrandLogin = () => {
  // const history = useHistory();
  const [user, setUser] = useState([]);
  const [logInId, setLogInId] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

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
      return;
    } 
    else {
      alert("Logged In!!");
      setLoggedIn(true)
      // history.push("/admin") //mention path wherever you want to redirect
    }
  };

  const brandDetails = async()=>{
      try {
        const res = await fetch(`http://localhost:4000/brand/${logInId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      brandDetails();
    },[]);
    console.log(user)

  return (
    <>
      <Header />
      {!loggedIn? 
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
        : <View user= {user}/>
        }
    </>
  );
};

export default BrandLogin;
