import React, { createContext, useState } from "react";
import { Button } from "react-bootstrap";
import Child from "./Child";

export const userName = createContext(); // Exporting the context

const Parent = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <div>
      <h1>Count {count} </h1>
      <Button value={count} onClick={increase}>
        +
      </Button>
      <Button> - </Button>
      <userName.Provider value={count}>
        <Child />
      </userName.Provider>
      
    </div>
  );
};

export default Parent;
