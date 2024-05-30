import React, { useEffect, useState } from "react";
import Admainnav from "./Admainnav";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const Adminresource = () => {
  
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    books: "",
    titles: "",
    journals: "",
    cD: "",
    volumes: "",
    project: "",
    question: "",
    news: "",
  });

  const { books, titles, journals, cD, volumes, project, question, news } =
    formData;

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        books &&
        titles &&
        journals &&
        cD &&
        volumes &&
        project &&
        question &&
        news
      ) {
        await axios.post("http://localhost:8080/postres", formData);
        toast.success("Data submitted successfully",{position:"top-center"});
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
      const result = await axios.get(`http://localhost:8080/getres`);
      // Update the state with the fetched data
      if (result.data && result.data.length > 0) {
        setFormData(result.data[0]); // Assuming you only want the first item
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
              Books
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="books"
                name="books"
                value={books}
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
              Titles
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="titles"
                name="titles"
                value={titles}
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
              Journals
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="journals"
                name="journals"
                value={journals}
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
              CD's
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="cD"
                name="cD"
                value={cD}
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
              Volumes
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="volumes"
                name="volumes"
                value={volumes}
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
              Projects
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="project"
                name="project"
                value={project}
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
              Questions
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="question"
                name="question"
                value={question}
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
              News
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder="news"
                name="news"
                value={news}
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

export default Adminresource;
