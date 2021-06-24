import React from 'react'

const NextMonth = (props) => {
    return props.trigger ? (
        <div>
          
          <div className="companny__det ">
          <button
            className="close__btn fas fa-times-circle"
            onClick={() => props.setTrigger(false)}
          ></button>
            <div className="companey">
              Name :<span className="bold">Rajdeep</span>
              <span className="bold fas fa-times-circle" ></span>
            </div>
    
            <div className="companey">
              Name :<span className="bold">Rajdeep</span>
              <span className="bold fas fa-times-circle" ></span>
            </div>
    
            <div className="companey">
              Name :<span className="bold">Rajdeep</span>
              <span className="bold fas fa-times-circle" ></span>
            </div>
    
            <div className="companey">
              Name :<span className="bold">Rajdeep</span>
              <span className="bold fas fa-times-circle" ></span>
            </div>
            
          </div>
        </div>
      ) : (
        ""
      );
}

export default NextMonth
