import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import mitimg from "../../assets/images/miet.png";
import { Dropdown } from "react-bootstrap";

const Admainnav = () => {
  return (
    <div>
      <div className="mainnav">
        <Navbar expand="lg" className="navbody" style={{ background: "white" }}>
          <img src={mitimg} alt="logo" height="50px" width="60px" />
          <Container fluid>
            <Navbar.Brand href="#">
              <b style={{ fontFamily: "initial", color: "#2D4356" }}>
                MAHENDRA INSTITUTE OF TECHNOLOGY
                <br />
                <h6
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#512B81",
                  }}
                >
                  Accredited by NAAC with 'A' Grade | Approved by AICTE, New
                  Delhi |Affiliated to Anna University,Chennai
                </h6>
              </b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my- my-lg-1 "
                style={{ marginLeft: "-120px" }}
                navbarScroll
              >
                <Nav.Link href="/maindashboard-admin" className="navcss one">
                  Users
                </Nav.Link>

                 {/* <Nav.Link href="/maindashboard-admin" className="navcss one">
                  Stats
                </Nav.Link> */}
                <Nav.Link
                  href="/maindashboard-admin/adminbooks"
                  className="navcss"
                >
                  Books
                </Nav.Link>

                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                      border: "1px solid transparent",
                      backgroundColor: "transparent",
                      color: "black",
                      fontSize: "18px",
                      marginTop: "3px",
                    }}
                  >
                    Update
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/maindashboard-admin/adminresource">
                      Resource
                    </Dropdown.Item>
                    <Dropdown.Item href="/maindashboard-admin/admincontact2">
                      Contact
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Nav.Link
                  href="/"
                  className="navcss"
                  style={{ background: "red", color: "white", height: "40px" }}
                >
                  LOGOUT
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Admainnav;
