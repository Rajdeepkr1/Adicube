import React, { useEffect, useState } from "react";
import "./admin.css";
const AdminMaster = () => {

  const [data,setData] = useState("")


  const onSubmit = async (e) => {
    console.log("invoke")
    e.preventDefault();
  const data = await fetch("/register")
  const res = await data.json();
    if (res.statusCode === 400 || !res) {
      console.log("error");
    } else {
      console.log(data)
    }
}
     

  return (
    <div method="GET">
        <div> {data}</div>


        <div className="master">
          <h3>IF MASTER USER</h3>
        <div className="master__user">
         
          <div className="influencer__s">
          <h3>LIST OF INFLUENCERS</h3>
           <div className="influencer__">
           <input
              className="Log__in"
              name=""
              type="text"
              placeholder="INFLUENCER NAME-A"
            />

            <div className="button__">
              <button type="submit" onClick={onSubmit} className="button__style" style={{ backgroundColor: "lightgreen" }}>
                A
              </button>
              <button className="button__style" style={{ backgroundColor: "red" }}>
                R
              </button>
            </div>
           </div>
           <div className="influencer__">
            <input
              className="Log__in"
              name="loginId"
              type="text"
              placeholder="INFLUENCER NAME-B"
            />

            <div className="button__">
              <button className="button__style" style={{ backgroundColor: "lightgreen" }}>
                A
              </button>
              <button className="button__style" style={{ backgroundColor: "red" }}>
                R
              </button>
            </div>
          </div>
          </div>

          
          <div className="brandlist">
          <h3>LIST OF BRANDS</h3>
            <div className="brand__">
              
            <input
              className="Log__in"
              name=""
              type="text"
              placeholder="BRAND-A"
            />

            <div className="button__">
              <button className="button__style" style={{ backgroundColor: "lightgreen" }}>
                A
              </button>
              <button className="button__style" style={{ backgroundColor: "red" }}>
                R
              </button>
            </div>

            </div>
            <div className="brand__">
            <input
              className="Log__in"
              name="loginId"
              type="text"
              placeholder="BRAND-B"
            />

            <div className="button__">
              <button className="button__style" style={{ backgroundColor: "lightgreen" }}>
                A
              </button>
              <button className="button__style" style={{ backgroundColor: "red" }}>
                R
              </button>
            </div>
            </div>
          </div>
          </div>
          <div className="__master">
            <h4>Channal Search</h4>
            <input
              className="Log__in"
              name=""
              type="text"
              placeholder="Channal Search "
            />

            <button className="Log__in" style={{ backgroundColor: "lightgreen" }}>
              Submit
            </button>
          </div>

          
          </div>

      </div>
  );
};

export default AdminMaster;
