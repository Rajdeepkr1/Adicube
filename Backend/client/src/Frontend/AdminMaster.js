import React, { useEffect, useState } from "react";
import "./admin.css";
const AdminMaster = () => {
  const [user, setUser] = useState([]);
  const [brandUser, setBrandUser] = useState([]);
  const [searchBox, setSearchBox] = useState("");

  const influencerList = async (e) => {
    try {
      const res = await fetch("http://localhost:4000/register", {
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
      const res = await fetch("http://localhost:4000/brand", {
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
  }, []);
  useEffect(() => {
    brandList();
  }, []);

  const deleteUser = (id) => {
    console.log(id);
    let copy = [...user];
    copy=copy.filter(item=>item._id!==id);
    setUser(copy);
    fetch(`http://localhost:4000/register/${id}`,{
      method:"PATCH"
    }).then((result)=>result.json().then((res)=>console.log(res)))
  };

  const onAccept = (id) => {
    console.log(id);
    let copy = [...user];
    copy=copy.filter(item=>item._id!==id);
    setUser(copy);
    fetch(`http://localhost:4000/register/${id}`,{
      method:"PUT"
    }).then((result)=>result.json().then((res)=>console.log(res)))
  };

  const rejectBrandUser = (id) => {
    console.log(id);
    let copy = [...brandUser];
    copy=copy.filter(item=>item._id!==id);
    setBrandUser(copy);
    fetch(`http://localhost:4000/brand/${id}`,{
      method:"PATCH"
    }).then((result)=>result.json().then((res)=>console.log(res)))
  };

  const acceptBrandUser = (id) => {
    console.log(id);
    let copy = [...brandUser];
    copy=copy.filter(item=>item._id!==id);
    setBrandUser(copy);
    fetch(`http://localhost:4000/brand/${id}`,{
      method:"PUT"
    }).then((result)=>result.json().then((res)=>console.log(res)))
  };

  const searchChannel = async (e) =>{
    e.preventDefault();

    try{
      const res = await fetch("http://localhost:4000/brand", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
    }
    catch(e){
      console.log(e)
    }

  }

  return (
    <>
      <div method="GET">
        <div className="master">
          <h3>IF MASTER USER</h3>
          <div className="master__user">
            <div className="influencer__s">
              <h3>LIST OF INFLUENCERS</h3>

              <div className="influencer__">
                <ul>
                  {user.map((item, index) => (
                    <li className="Log__in" index={index} key={`${item._id}`}>
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
                    <li className="Log__in" index={index} key={`${item._id}`}>
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
              onChange ={(e)=>setSearchBox(e.target.value)}
            />

            <button
              className="Log__in"
              style={{ backgroundColor: "lightgreen" }}
              onClick={searchChannel}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMaster;
