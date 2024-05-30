import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import NavScrollExample from "./NavscrollExample";

const About = () => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/getres");
      setRes(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <NavScrollExample />
      <div className="aboutContainer">
        <div className="about">
          <Card
            className="card"
            style={{
              width: "18rem",
              height: "31rem",
              justifyContent: "center",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              marginTop: "80px",
            }}
          >
            <Card.Body>
              <Card.Text>
                <div className="Column1">
                  <h3 style={{ color: "red", fontSize: "larger" }}>
                    <b>Services :</b>
                  </h3>
                  <table>
                    <tr>
                      <td>Inter Library Loan(ILL)</td>
                    </tr>
                    <tr>
                      <td>Current Awareness Services(CAS)</td>
                    </tr>
                    <tr>
                      <td>User Awareness Programmers</td>
                    </tr>
                    <tr>
                      <td>Book Bank</td>
                    </tr>
                    <tr>
                      <td>Newspaper Clipping Services</td>
                    </tr>
                    <tr>
                      <td>Online Public Access Catalogue(OPAC)</td>
                    </tr>
                  </table>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="card"
            style={{
              width: "30rem",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Card.Body>
              <p style={{ color: "green" }}>
                Specified collections are available in Engineering and
                Technology
              </p>
              <Card.Text>
                <div className="Column2">
                  <table>
                    {res.map((res, index) => (
                      <div>
                        <tr key={index}>
                          <th>S.no</th>
                          <th>Collections</th>
                          <th>Volumes</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Books (Text & References)</td>
                          <td>{res.books}</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Titles</td>
                          <td>{res.titles}</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Journals & Magazines (Print)</td>
                          <td>{res.journals}</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>CD / DVD's</td>
                          <td>{res.cD}</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Back Volumes</td>
                          <td>{res.volumes}</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Project Reports</td>
                          <td>{res.project}</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Question Bank</td>
                          <td>{res.question}</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Newspapers</td>
                          <td>{res.news}</td>
                        </tr>
                      </div>
                    ))}
                  </table>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            className="card"
            style={{
              width: "22rem",
              height: "32rem",
              justifyContent: "center",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              marginTop: "80px",
            }}
          >
            <Card.Body>
              <Card.Text>
                <div className="Column3">
                  <h3 style={{ marginTop: "0px", color: "red", gap: "20px" }}>
                    <b>E-Resources :</b>
                  </h3>
                  <table>
                    <tr>
                      <td>DELNET (Developing Library Network-Delhi)</td>
                    </tr>
                    <tr>
                      <td>Elsevier (Science Direct)</td>
                    </tr>
                    <tr>
                      <td>NDL (National Digital Library)</td>
                    </tr>
                    <tr>
                      <td>
                        NPTEL (National Programme on Technology Enhanced
                        Learning)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        InTechOpen - Open Science open minds (E-Books &
                        E-Journals Database)
                      </td>
                    </tr>
                    <tr>
                      <td>Online Public Access Catalogue (OPAC) </td>
                    </tr>
                  </table>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
