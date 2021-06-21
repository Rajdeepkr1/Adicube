import React, { useEffect, useState } from "react";
import "./admin.css";
const AdminMaster = () => {
  const [user, setUser] = useState([]);
  const [flag, setFlag] = useState(true);

  const onSubmit = async (e) => {
    console.log("invoke");
    try {
      const res = await fetch("http://localhost:4000/register", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    onSubmit();
  }, []);

  // const onRemove = (key) => {
  //   console.log("delete");
  //   const copy = [...user];
  //   copy.splice(key, 1);
  //   setUser(copy);
  // };

  const deleteUser = (id) => {
    console.log(id);
    let copy = [...user];
    copy=copy.filter(item=>item._id!==id);
    setUser(copy);
    // fetch(`http://localhost:4000/register/${id}`,{
    //   method:"DELETE"
    // }).then((result)=>result.json().then((res)=>console.log(res)))
  };

  const onAccept = (key) => {
    console.log(key);
    if (key) {
      setFlag(false);
    }
  };

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
                <input
                  className="Log__in"
                  name=""
                  type="text"
                  placeholder="BRAND-A"
                />

                <div className="button__">
                  <button
                    className="button__style"
                    style={{ backgroundColor: "lightgreen" }}
                  >
                    A
                  </button>
                  <button
                    className="button__style"
                    style={{ backgroundColor: "red" }}
                  >
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
                  <button
                    className="button__style"
                    style={{ backgroundColor: "lightgreen" }}
                  >
                    A
                  </button>
                  <button
                    className="button__style"
                    style={{ backgroundColor: "red" }}
                  >
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

            <button
              className="Log__in"
              style={{ backgroundColor: "lightgreen" }}
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
