import axios from "axios";
import React, { createContext, useContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const result = await axios.get("http://localhost:8080/getlogin");
    const userData = result.data;
    return { userData };
  } catch (error) {
    console.error("Error loading users:", error);
  }
};
const DashboardContext = createContext();

const Mainlayout = () => {
  const { userData } = useLoaderData();
  
  return (
    <DashboardContext.Provider value={{ userData }}>
      <Outlet />
    </DashboardContext.Provider>
  );
};
export const useDashboardcontext = () => useContext(DashboardContext);
export default Mainlayout;
