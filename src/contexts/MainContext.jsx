import axios from "axios";
import React, { createContext, useContext } from "react";
import { API } from "../utils/consts";

const mainContext = createContext();
export function useMainContext() {
  return useContext(mainContext);
}

async function addPods(newPod) {
  try {
    await axios.post(API, newPod);
  } catch (e) {
    console.log(e);
  }
}

const MainContext = ({ children }) => {
  const value = { addPods };
  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
};

export default MainContext;
