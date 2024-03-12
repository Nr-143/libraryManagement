import React, { useContext } from "react";
import { userName } from "./Parent"; // Importing userContext from Parent

const Child = () => {
  const user = useContext(userName);
  return <div>{user}</div>;
};

export default Child;
