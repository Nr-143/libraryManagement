import React from "react";
import NavScrollExample from "./NavscrollExample";

const UserAvailbooks = () => {
  return (
    <div>
      <NavScrollExample />

      <h1
        style={{
          color: "#2D4356",
          display: "flex",
          justifyContent: "center", 
          marginTop: "300px",
        }}
      >
        No books updated Yet.....
      </h1>
    </div>
  );
};

export default UserAvailbooks;
