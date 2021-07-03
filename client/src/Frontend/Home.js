import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import InputForm from "./InputForm";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <img
           src="https://s3.amazonaws.com/zaubatrademarks/730a24d8-e99e-48ef-8fff-dd2dc7c5e0ab.png"
          alt="adicube"
        />
      </div>
      <InputForm />
      <Link to="/Admin" style={{ textDecoration: "none", fontWeight: "bold"}}>
        <div style={{
        marginTop: "5px",
        display: "flex",
        justifyContent: "space-evenly",
      }}>
        <div className="homePage " style={{ width:"36.2vw", textDecoration: "none", fontWeight: "bold",margin:"10px"}} >Login To Admin</div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
