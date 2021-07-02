import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";


export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);


  return (
    <Context.Provider
      value={{
        user: state.user, 
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
