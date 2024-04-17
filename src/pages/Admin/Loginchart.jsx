import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Chart from "react-apexcharts";
import CardGroup from "react-bootstrap/CardGroup";

const Loginchart = () => {
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
      const result = await axios.get("http://localhost:8080/getlogin");
      //   setUsers(result.data);
      countDepartments(result.data);
      //   setBorrowed(result.data.length);
      //   countReturns(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
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
    <div>
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
                  Department wise Login Info !
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Loginchart;
