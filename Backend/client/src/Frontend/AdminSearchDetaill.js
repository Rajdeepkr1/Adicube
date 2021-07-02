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
                
            </div>           
        </div>
        </div>
    ) : "";
}

export default AdminSearchDetaill
