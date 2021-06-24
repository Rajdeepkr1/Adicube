import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import InputForm from "./InputForm";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <img
          // src="https://adicube.com/wp-content/uploads/2021/03/Add_a_heading-removebg-preview-3.png"
          alt="adicube"
        />
      </div>
      <InputForm />
      <Link to="/Admin" style={{ textDecoration: "none", fontWeight: "bold"}}>
        <div className="homePage " style={{ textDecoration: "none", fontWeight: "bold",margin:"10px"}} >Login To Admin</div>
      </Link>
    </div>
  );
};

export default Home;
