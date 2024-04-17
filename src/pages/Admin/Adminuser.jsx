import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Chart from "react-apexcharts";
import CardGroup from "react-bootstrap/CardGroup";
import Admainnav from "./Admainnav";
import Loginchart from "./Loginchart";

const Adminuser = () => {
  const currentDate = new Date();
  const date1 = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year1 = currentDate.getFullYear();

  const tdyDate = `${year1}-${month < 10 ? "0" + month : month}-${
    date1 < 10 ? "0" + date1 : date1
  }`;

  const [users, setUsers] = useState([]);
  const [borrowed, setBorrowed] = useState(0);
  const [returns, setReturns] = useState(0);
  const [Bending, setbending] = useState();
  const [depCounts, setDepCounts] = useState({
    CSE: 0,
    IT: 0,
    ECE: 0,
    MECH: 0,
    BIOMED: 0,
    EEE: 0,
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/get");
      setUsers(result.data);
      bending(result.data);
      countDepartments(result.data);
      setBorrowed(result.data.length);
      countReturns(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };
  const bending = (data) => {
    let bendingReturns = 0;
    data.forEach((user) => {
      if (user.date2 < tdyDate) {
        console.log(tdyDate);
        bendingReturns++;
      }
    });
    setbending(bendingReturns);
  };

  const countDepartments = (data) => {
    const counts = {
      CSE: 0,
      IT: 0,
      ECE: 0,
      MECH: 0,
      BIOMED: 0,
      EEE: 0,
    };

    data.forEach((user) => {
      switch (user.department) {
        case "CSE":
          counts.CSE++;
          break;
        case "IT":
          counts.IT++;
          break;
        case "ECE":
          counts.ECE++;
          break;
        case "MECH":
          counts.MECH++;
          break;
        case "BIOMED":
          counts.BIOMED++;
          break;
        case "EEE":
          counts.EEE++;
          break;
        default:
          break;
      }
    });

    setDepCounts(counts);
  };

  const countReturns = (data) => {
    let todayReturns = 0;
    data.forEach((user) => {
      if (user.date2 === tdyDate) {
        todayReturns++;
      }
    });
    setReturns(todayReturns);
  };

  const options = {
    series: [
      depCounts.CSE,
      depCounts.IT,
      depCounts.ECE,
      depCounts.MECH,
      depCounts.BIOMED,
      depCounts.EEE,
    ],
    labels: ["CSE", "IT", "ECE", "MECH", "BIOMED", "EEE"],
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size: "50px",
          gap: "10px",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fontSize: "20px",
              color: "#03001C",
            },
          },
        },
      },
    },
    colors: ["#0079FF", "#FF004D", "#E26EE5", "#211951", "#FFB84C", "#97FEED"],
  };

  return (
    <>
      <Admainnav />

      <div
        style={{
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          background: "white",
        }}
      >
        <CardGroup
          style={{
            padding: "20px",
            fontWeight: "bold",
            fontSize: "19px",
          }}
        >
          <Card>
            <Card.Body
              style={{ display: "flex", gap: "25px", marginTop: "10px" }}
            >
              <Card.Text>To be Returned today : </Card.Text>
              <h4 style={{ color: "darkgreen" }}>{returns}</h4>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body
              style={{
                padding: "20px",
                fontWeight: "bold",
                fontSize: "19px",
                display: "flex",
                gap: "25px",
                marginTop: "10px",
              }}
            >
              <Card.Text>On-Lend Books :</Card.Text>
              <h4 style={{ color: "darkgreen" }}> {borrowed}</h4>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body
              style={{
                padding: "20px",
                fontWeight: "bold",
                fontSize: "19px",
                display: "flex",
                gap: "25px",
                marginTop: "10px",
              }}
            >
              <Card.Text>To be Returned :</Card.Text>
              <h4 style={{ color: "red" }}>{Bending}</h4>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body
              style={{
                padding: "20px",
                fontWeight: "bold",
                fontSize: "19px",
                display: "flex",
                gap: "25px",
                marginTop: "10px",
              }}
            >
              <Card.Text>Books Available :</Card.Text>
              <h4 style={{ color: "green" }}>Not Updated</h4>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>

      {/* //Login Chart department wise */}

      <Loginchart />

      <div
        style={{
          marginTop: "40px",
          paddingRight: "13px",
          maxWidth: "fitContent",
          position: "",
        }}
      >
        <Row xs={3} md={1} className="g-1">
          <Col>
            <Card>
              <Chart
                options={options}
                series={options.series}
                type="donut"
                width="40%"
                height={400}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Department wise Borrowed Books
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <h1>kkk</h1>
    </>
  );
};

export default Adminuser;
