import React from "react";
// import Button from 'react-bootstrap/Button';
import img1 from "../../assets/images/Carousel1.jpg";
import Card from "react-bootstrap/Card";
import NavScrollExample from "./NavscrollExample";
function Layer3() {
  return (
    <div>
      <NavScrollExample />
      <div>
        <div className="l3 title">
          <h3>OUR MODULES</h3>
        </div>
        <p
          style={{
            textAlign: "center",
          }}
        >
          {" "}
          These modules help in the smoothh functiong of Library Management
          System{" "}
        </p>

        <div className="container2">
          <div className="cards">
            <Card
              style={{
                width: "22rem",
                height: "300px",
                borderRadius: "60px",
                boxShadow: "2px 2px 5px black",
              }}
            >
              <Card.Body>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="145"
                  fill="currentColor"
                  class="bi bi-journal-bookmark-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"
                  />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                </svg>
                <Card.Title className="ctitle">Cataloguing</Card.Title>
                <Card.Text>
                  It is the process of creating a list of all bibliographic
                  items such as short description,list of subjects, author name
                  and the classification.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="cards">
            <Card
              style={{
                width: "22rem",
                height: "300px",
                borderRadius: "60px",
                boxShadow: "2px 2px 5px black",
              }}
            >
              <Card.Body>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="145"
                  fill="currentColor"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
                <Card.Title className="ctitle">Membership Module</Card.Title>
                <Card.Text>
                  This module keep track of all important information of
                  students, who has taken membership of library
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="cards">
            <Card
              style={{
                width: "22rem",
                height: "300px",
                borderRadius: "60px ",
                boxShadow: "2px 2px 5px black",
              }}
            >
              <Card.Body>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="145"
                  fill="currentColor"
                  class="bi bi-stopwatch-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0" />
                </svg>
                <Card.Title className="ctitle">Report Generator</Card.Title>
                <Card.Text>
                  It helps in generating various reports like status of issued
                  books , total members, books returned etc.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="container2">
          <div className="cards">
            <Card
              style={{
                width: "22rem",
                height: "300px",
                borderRadius: "60px",
                boxShadow: "2px 2px 5px black",
              }}
            >
              <Card.Body>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="145"
                  fill="currentColor"
                  class="bi bi-ubuntu"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546M7.4 13.108a5.54 5.54 0 0 1-3.775-2.88 3.27 3.27 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.25 3.25 0 0 1-.666-1.9 6 6 0 0 1-.557-.091m3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546m3.163-3.108a7.44 7.44 0 0 0 .373-8.726 3.3 3.3 0 0 1-1.278 1.498 5.57 5.57 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693M2.098 3.998a3.3 3.3 0 0 1 1.897.486 5.54 5.54 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.47 7.47 0 0 0-7.051 3.745" />
                </svg>
                <Card.Title className="ctitle">Circulation</Card.Title>
                <Card.Text>
                  It is a central and highly visible function of library, as it
                  keeps the record of status books in the library.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="cards">
            <Card
              style={{
                width: "22rem",
                height: "300px",
                borderRadius: "60px",
                boxShadow: "2px 2px 5px black",
              }}
            >
              <Card.Body>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="145"
                  fill="currentColor"
                  class="bi bi-database-fill-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1" />
                  <path d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12 12 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7m6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.55 4.55 0 0 1 .23-2.002m-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-1.3-1.905" />
                </svg>
                <Card.Title className="ctitle">OPAC</Card.Title>
                <Card.Text>
                  Online Public Access Catalog. it is an online database of
                  materials kept in the library. it allows the search for an
                  item of our choice in the library.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="cards">
            <Card
              style={{
                width: "22rem",
                height: "300px",
                borderRadius: "60px",
                boxShadow: "2px 2px 5px black",
              }}
            >
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

              <Card.Body>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="145"
                  fill="currentColor"
                  class="bi bi-lightbulb"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                </svg>
                <Card.Title className="ctitle">Acquisition</Card.Title>
                <Card.Text>
                  It the department in the library which is responsibile for the
                  selection and purchase of materials or resources in the
                  library.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layer3;
