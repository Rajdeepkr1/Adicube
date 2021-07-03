import React, { useState } from "react";
import "./admin.css";
const AdminNotMaster = () => {

  const [searchBox, setSearchBox] = useState("");
  const [searchData, setSearchData] = useState([]);

  const searchChannel = async (e) =>{
    e.preventDefault();

    try{
       //const res = await fetch(`http://localhost:4000/register/${searchBox}`, {
        const res = await fetch(`https://adicubeapps.herokuapp.com/register/${searchBox}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
      setSearchData(data)
    }
    catch(e){
      console.log(e)
    }
  }
  console.log(searchData)


  return (
    <div>
      <div className="Not__master">
        <h3>IF NOT A MASTER USER</h3>
        <h4>Channal Search</h4>
        <input className="Log__in" type="text" placeholder="Channal Search" onChange ={(e)=>setSearchBox(e.target.value)} />

        <button className="Log__in" onClick={searchChannel} style={{ backgroundColor: "lightgreen" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdminNotMaster;
