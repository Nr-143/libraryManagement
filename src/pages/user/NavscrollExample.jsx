import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import mitimg from "../../assets/images/miet.png";
import { useDashboardcontext } from "../Mainlayout";
import TimingContact from "./TimingContact";

function NavScrollExample() {
  const signinfo1 = useDashboardcontext();
  const signinfo = signinfo1.userData;
  console.log(signinfo);

  return (
    <div className="mainnav">
      <Navbar expand="lg" className="navbody">
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
                {" "}
                Accredited by NAAC with 'A' Grade | Approved by AICTE, New Delhi
                |Affiliated to Anna University,Chennai
              </h6>
            </b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my- my-lg-1 "
              style={{ marginLeft: "-209px" }}
              navbarScroll
            >
              <Nav.Link href="/maindashboard-user" className="navcss one">
                Home
              </Nav.Link>
              <Nav.Link href="/maindashboard-user/Userbooks" className="navcss">
                Books
              </Nav.Link>
              <Nav.Link href="/maindashboard-user/about" className="navcss">
                Resources
              </Nav.Link>
              <Nav.Link href="/maindashboard-user/layer3" className="navcss">
                Module
              </Nav.Link>

              <Nav.Link
                href="/"
                className="navcss"
                style={{ background: "red", color: "white" }}
              >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <marquee className="marque">
        <b style={{ color: "yellow" }}>Today News :</b> NEET UG 2024
        registration begins direct link to apply..
        <a
          href="https://www.gmrit.org/neet-ug-application-form/"
          style={{ color: "aqua" }}
        >
          {" "}
          Click here{" "}
        </a>
      </marquee>

      <div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default NavScrollExample;
