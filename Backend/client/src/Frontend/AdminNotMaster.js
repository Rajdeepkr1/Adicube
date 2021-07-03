import React, { useState } from "react";
import "./admin.css";
import AdminSearchDetaill from "./AdminSearchDetaill";
const AdminNotMaster = () => {

  const [searchBox, setSearchBox] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [popup, setPopup] = useState(false);

  const searchChannel = async (e) => {
    e.preventDefault();

    try {
      if(searchBox===""){
        return alert("Please enter your search")
      }
      else{
      const res = await fetch(`http://localhost:4000/register/${searchBox}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if(!data || data.statusCode===400){
        alert("No Data Found")
        return
      }
      else{
      setSearchData(data);
      setPopup(true)
      }
    }
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div>
      <div className="Not__master">
        <h4>Channal Search</h4>
        <input className="Log__in" type="text" placeholder="Channal Search" onChange ={(e)=>setSearchBox(e.target.value)} />

        <button className="Log__in" onClick={searchChannel} style={{ backgroundColor: "lightgreen" }}>
          Submit
        </button>
      </div>
      <AdminSearchDetaill searchData={searchData} trigger={popup} setTrigger={setPopup}/>
    </div>
  );
};

export default AdminNotMaster;
