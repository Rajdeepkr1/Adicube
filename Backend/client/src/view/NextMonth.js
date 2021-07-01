import React from 'react'

const NextMonth = (props) => {

  const datas = props.nextMonth
  
  const newData =!datas ? "" : datas.map((item)=>item[0])

    return props.trigger ? (
        <div>
          
          <div className="companny__det ">
          <button
            className="close__btn fas fa-times-circle"
            onClick={() => props.setTrigger(false)}
          ></button>

          {!datas || !newData ?"": newData.map((item,index)=><div key={index} className="companey">
              Name :<span className="bold">{item.firstname}</span>
              <span className="bold fas fa-times-circle" ></span>
            </div> )}            
          </div>
        </div>
      ) : (
        ""
      );
}

export default NextMonth
