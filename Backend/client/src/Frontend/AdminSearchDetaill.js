import React from 'react'

const AdminSearchDetaill = (props) => {

    return (props.trigger) ? (
        <div style={{
            marginTop:"5px",
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"center",}}>
        <div className="popup">
            <button className="close__btn fas fa-times-circle" onClick={()=>props.setTrigger(false)}></button> 
            <div className="view__moreContant">
                
                <h1>LIST OF INFLUENCERS</h1>

                {props.searchData.length !== 0 ? (
            props.searchData.map((item, index) => (
              <div style={{
                display:"flex",
                justifyContent:"space-evenly",
                alignItems:"center",}} key={index}>
                <h3 
                  style={{
                    color: "green",
                    borderRadius: "5px",
                    backgroundColor: "aliceblue",
                    padding: "7px",
                    width:"36vw"
                  }}
                >
                  {item.firstname} {item.lastname}
                </h3>
              </div>
            ))
          ) : ""}
                
            </div>           
        </div>
        </div>
    ) : "";
}

export default AdminSearchDetaill
