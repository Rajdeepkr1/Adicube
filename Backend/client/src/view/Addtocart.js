import React from 'react'

const Addtocart = (props) => {
  const id = props.influencerdata._id

    return (props.trigger) ? (
        <div className="Addto" >
          <button className="close__btn fas fa-times-circle" onClick={()=>props.setTrigger(false)}></button> 
          <div className="channel">
              <div className="view__more" onClick={()=>props.perentFunction(id)} style={{backgroundColor:"rgb(32, 170, 32)"}}>
                Present month
              </div>
              <div className="view__more" onClick={()=>props.nextFunction(id)} style={{backgroundColor:"rgb(32, 170, 32)"}} >
                Next month
              </div>
          </div>
        </div>
    ) : "";
}

export default Addtocart
