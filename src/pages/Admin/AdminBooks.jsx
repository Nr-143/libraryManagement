import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Admainnav from "./Admainnav";
import Borrowed from "./Borrowed";
import Addbook from "./Addbook";
import Returned from "./Returned";

const AdmainHome = () => {
  return (
    <div style={{ backgroundColor: "" }}>
      <Admainnav />
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={1}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  style={{ marginBottom: "20px", marginTop: "40px" }}
                >
                  AvailBooks
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" style={{ marginBottom: "20px" }}>
                  On-Lend
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" style={{ marginBottom: "20px" }}>
                  To-Lend
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="forth" style={{ marginBottom: "20px" }}>
                  Returned
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link
                  eventKey="fifth"
                  style={{ marginBottom: "20px", color: "black" }}
                >
                  Resources
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Col>
          <Col sm={11}>
            <Tab.Content>
              <Tab.Pane eventKey="first">Not updated yet...</Tab.Pane>
              <Tab.Pane eventKey="second">
                <Borrowed />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Addbook />
              </Tab.Pane>
              <Tab.Pane eventKey="forth">
                <Returned />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">Not updated yet...</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default AdmainHome;
