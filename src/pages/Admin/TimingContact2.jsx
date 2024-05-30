import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap"; // Update import for Form
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Col, Row } from "react-bootstrap";
import Admainnav from "./Admainnav";

const TimingContact2 = () => {
  let navigate = useNavigate();
  const [contact, setContact] = useState({
    email: "",
    number: "",
    time: "",
    time2: "",
    status: "",
  });

  const { email, number, time, time2, status } = contact;

  const onInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email && number && time && time2 && status) {
        await axios.post("http://localhost:8080/postcontact", contact);
        toast.success("Data submitted successfully");
        navigate("/maindashboard-admin");
      } else {
        toast.error("Fill all the required fields",{position:"top-center"});
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/getcontact`);
      // Update the state with the fetched data
      if (result.data.length > 0) {
        setContact(result.data[0]); // Assuming you only want the first item
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <Admainnav />
   
      <div
        className="resUpdate"
        style={{
          marginLeft: "42vw",
          marginTop: "120px",
          background: "white",
          padding: "14px",
          border: "1px solid transparent",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          maxWidth: "400px",
        }}
      >
        <Form>
          <Form.Group
            as={Row}
            controlId="formHorizontalEmail"
            style={{ marginTop: "4px" }}
          >
            <Form.Label column sm={4}>
              Email
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="email"
                name="email"
                value={email}
                type="text"
                onChange={onInputChange}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            controlId="formHorizontalPassword"
            style={{ marginTop: "7px" }}
          >
            <Form.Label column sm={4}>
              Number
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="number"
                name="number"
                value={number}
                type="text"
                onChange={onInputChange}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            controlId="formHorizontalPassword"
            style={{ marginTop: "7px" }}
          >
            <Form.Label column sm={4}>
              Open-Time
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="time"
                name="time"
                value={time}
                type="text"
                onChange={onInputChange}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            controlId="formHorizontalPassword"
            style={{ marginTop: "7px" }}
          >
            <Form.Label column sm={4}>
              Close-Time
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="time2"
                name="time2"
                value={time2}
                type="text"
                onChange={onInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            controlId="formHorizontalPassword"
            style={{ marginTop: "7px" }}
          >
            <Form.Label column sm={4}>
              Status
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="status"
                name="status"
                value={status}
                type="text"
                onChange={onInputChange}
              />
            </Col>
          </Form.Group>
          <Button
            variant="danger"
            style={{ marginTop: "30px", marginLeft: "16vw" }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
    
    </div>
  );
};

export default TimingContact2;
