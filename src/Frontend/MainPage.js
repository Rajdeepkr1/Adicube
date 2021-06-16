import React from "react";
import '../App.css'
import Influencer from "./Influencer";
import Home from "./Home";
import Brand from "./Brand";


const MainPage = () => {
  return (
    <>
      <div className="app">
        <Influencer />
        <Home />
        <Brand />
      </div>
    </>
  );
};

export default MainPage;
