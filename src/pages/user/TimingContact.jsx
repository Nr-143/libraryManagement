import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const TimingContact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getcontact");
    setContact(result.data);
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "end", marginRight: "30px" }}
    >
      {contact.map((contact, index) => (
        <div style={{ display: "flex", gap: "60px" }}>
          <div>
            Time : {contact.time} - {contact.time2}{" "}
            <div style={{ display: "flex" }}>
              {/* <div
                style={{
                  border: "1px solid #14C38E",
                  minWidth: "10px",
                  maxHeight: "10px",
                  borderRadius: "30px",
                  background: "#14C38E",
                  marginTop: "8px",
                  marginRight: "3px",
                }}
              ></div> */}
              <div
                style={{
                  color: contact.status == "Open" ? "#3EC70B" : "red",
                  textAlign: "center",
                  marginTop: "3px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i class="material-icons" style={{ fontSize: "20px" }}>
                  {/* book */}<svg xmlns="http://www.w3.org/2000/svg" marginBottom="10px" width="11" height="10" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>
                </i>

                <div style={{ fontSize: "19px", color: contact.status == "OPEN" ? "green" : "red" }}>{contact.status}</div>

              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <p style={{ color: "#FE7A36", fontWeight: "bold" }}>Email:</p>{" "}
              <p style={{ marginLeft: "20px" }}>{contact.email}</p>
            </div>
            <div style={{ display: "flex", marginTop: "-10px" }}>
              <p style={{ color: "#FE7A36", fontWeight: "bold" }}>Contact:</p>{" "}
              <p style={{ marginLeft: "20px" }}> {contact.number}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimingContact;
