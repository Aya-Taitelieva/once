import React, { createContext, useContext } from "react";

const mainContext = createContext();
export function useMainContext() {
  return useContext(mainContext);
}

const MainContext = ({ children }) => {
  const value = {};
  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
};

export default MainContext;
