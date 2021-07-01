import React, { useState } from "react";
import { createContext } from "react";

const Name = createContext();

const Addtocart = (props) => {
  return props.trigger ? (
    <>
      <Name.Provider value={"rajdeep kumar"}>
        <div className="Addto">
          <button
            className="close__btn fas fa-times-circle"
            onClick={() => props.setTrigger(false)}
          ></button>
          <div className="channel">
            <div
              className="view__more"
              style={{ backgroundColor: "rgb(32, 170, 32)" }}
            >
              Present month
            </div>
            <div
              className="view__more"
              style={{ backgroundColor: "rgb(32, 170, 32)" }}
            >
              Next month
            </div>
          </div>
        </div>
      </Name.Provider>
    </>
  ) : (
    ""
  );
};

export default Addtocart;
export {Name} ;
