import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./Header.css";

const Header = () => {

  const {user, dispatch} = useContext(Context)

  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"})
  }

  return (
    <div className="header__page">
      <Link
        to="/InfluencerAccess"
        style={{ textDecoration: "none", fontWeight: "bold" }}
      >
        <div className="influencer__Access">Influencer Access</div>
      </Link>

      <Link     
        to="/BrandLogin"
        style={{ textDecoration: "none", fontWeight: "bold" }}
      >
        <div className="brand__login">Brand Login</div>
      </Link>

      <Link
        to="/MainPage"
        style={{ textDecoration: "none", fontWeight: "bold" }}
      >
        <div className="homePage">HomePage</div>
      </Link>

      <Link to="/Admin" style={{ textDecoration: "none", fontWeight: "bold" }}>
        <div className="homePage">Admin</div>
      </Link>
      {user?<div className="homePage" onClick={handleLogout}>{user && "Logout"}</div> :null}
    </div>
  );
};

export default Header;
