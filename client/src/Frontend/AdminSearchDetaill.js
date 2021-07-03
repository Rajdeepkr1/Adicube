import React from "react";

const AdminSearchDetaill = (props) => {
  return props.trigger ? (
    <div
      style={{
        marginTop: "5px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div className="popup">
        <button
          className="close__btn fas fa-times-circle"
          onClick={() => props.setTrigger(false)}
        ></button>
        <div
          style={{
            display: "flex",
            // justifyContent:"space-evenly",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {props.searchData.length !== 0
            ? props.searchData.map((item, index) => (
                <div
                  style={{
                    marginTop: "2px",
                    color: "green",
                    borderRadius: "5px",
                    backgroundColor: "aliceblue",
                    padding: "7px",
                    width: "36vw",
                  }}
                  key={index}
                >
                  {item.firstname} {item.lastname} <span style={{marginLeft:"8px",border:"none",background:"red",padding:"3px",textAlign:"center",color:"white",borderRadius:"3px"}}> {item.status}</span>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AdminSearchDetaill;
