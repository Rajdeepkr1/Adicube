import React, { useEffect, useState } from "react";
import "./admin.css";
import AdminSearchDetaill from './AdminSearchDetaill';
const AdminMaster = () => {
  const [user, setUser] = useState([]);
  const [brandUser, setBrandUser] = useState([]);
  const [searchBox, setSearchBox] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [popup, setPopup] = useState(false);

  const influencerList = async (e) => {
    try {
      //const res = await fetch("http://localhost:4000/register", {
        const res = await fetch("https://adicubeapps.herokuapp.com/register", {
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
  const brandList = async (e) => {
    try {
      // const res = await fetch("http://localhost:4000/brand", {
        const res = await fetch("https://adicubeapps.herokuapp.com/brand", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setBrandUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    influencerList();
    brandList();
  }, []);

  const deleteUser = (id) => {
    let copy = [...user];
    copy = copy.filter((item) => item._id !== id);
    setUser(copy);
    // fetch(`http://localhost:4000/register/${id}`, {
      fetch(`https://adicubeapps.herokuapp.com/register/${id}`,{
      method: "PATCH",
    }).then((result) => result.json().then((res) => console.log(res)));
  };

  const onAccept = (id) => {
    let copy = [...user];
    copy = copy.filter((item) => item._id !== id);
    setUser(copy);
    //fetch(`http://localhost:4000/register/${id}`, {
       fetch(`https://adicubeapps.herokuapp.com/register/${id}`,{
      method: "PUT",
    }).then((result) => result.json().then((res) => console.log(res)));
  };

  const rejectBrandUser = (id) => {
    let copy = [...brandUser];
    copy = copy.filter((item) => item._id !== id);
    setBrandUser(copy);
    //fetch(`http://localhost:4000/brand/${id}`, {
       fetch(`https://adicubeapps.herokuapp.com/brand/${id}`,{
      method: "PATCH",
    }).then((result) => result.json().then((res) => console.log(res)));
  };

  const acceptBrandUser = (id) => {
    let copy = [...brandUser];
    copy = copy.filter((item) => item._id !== id);
    setBrandUser(copy);
    //fetch(`http://localhost:4000/brand/${id}`, {
       fetch(`https://adicubeapps.herokuapp.com/brand/${id}`,{
      method: "PUT",
    }).then((result) => result.json().then((res) => console.log(res)));
  };

  const searchChannel = async (e) => {
    e.preventDefault();

    try {
      if(searchBox===""){
        return alert("Please enter your search")
      }
      else{
      // const res = await fetch(`http://localhost:4000/register/${searchBox}`, {
        const res = await fetch(`https://adicubeapps.herokuapp.com/register/${searchBox}`, {
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
    <>
      <div method="GET">
        <div className="master">
          <h3> MASTER USER</h3>
            <div className="master__user">
              <div className="influencer__s">
                <h3>LIST OF INFLUENCERS</h3>

                <div className="influencer__">
                  <ul>
                    {user.map((item, index) => (
                      <li
                        className="Log__search"
                        index={index}
                        key={`${item._id}`}
                      >
                        {`${item.firstname} ${item.lastname}`}

                        <div className="button__">
                          <button
                            onClick={() => onAccept(item._id)}
                            type="submit"
                            className="button__style"
                            style={{ backgroundColor: "lightgreen" }}
                          >
                            A
                          </button>
                          {item._id ? (
                            <button
                              onClick={() => deleteUser(item._id)}
                              className="button__style"
                              style={{ backgroundColor: "red" }}
                            >
                              R
                            </button>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="brandlist">
                <h3>LIST OF BRANDS</h3>
                <div className="brand__">
                  <ul>
                    {brandUser.map((item, index) => (
                      <li
                        className="Log__search"
                        index={index}
                        key={`${item._id}`}
                      >
                        {`${item.firstname} ${item.lastname}`}
                        <div className="button__">
                          <button
                            onClick={() => acceptBrandUser(item._id)}
                            type="submit"
                            className="button__style"
                            style={{ backgroundColor: "lightgreen" }}
                          >
                            A
                          </button>
                          {item._id ? (
                            <button
                              onClick={() => rejectBrandUser(item._id)}
                              className="button__style"
                              style={{ backgroundColor: "red" }}
                            >
                              R
                            </button>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
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
              onChange={(e) => setSearchBox(e.target.value)}
            />

            <button
              className="Log__in"
              style={{ backgroundColor: "lightgreen" }}
              onClick={searchChannel}
            >
              Submit
            </button>
            
            <AdminSearchDetaill searchData={searchData} trigger={popup} setTrigger={setPopup}/>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default AdminMaster;
