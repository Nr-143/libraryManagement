import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Returned = () => {
  const [user, setUser] = useState([]);
  // const [bookcode, setCheck] = useState([{bookcode:" "}]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getreturn");
    setUser(result.data);
  };

  // onInputChange = () => {
  //   setCheck({ ...check, [e.target.name]: e.target.value });
  // };

  const onSave = () => {
    // if (bookcode) {
    //   const findedValue = user.find(
    //     (userInfo) => userInfo.book_code === bookcode
    //   );
    //   console.log(findedValue);
    // }
    loadUsers();
  };

  return (
    <div>
      <div className="userdata">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  // value={bookcode}
                  // name="bookcode"
                  placeholder="Search"
                  className=" mr-sm-2"
                  // onChange={onInputChange}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" onClick={onSave}>
                  Refresh
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Book Code</th>
              <th>Date of Borrowed</th>
              <th>Date of Return</th>
              <th>Student Name</th>
              <th>Reg no</th>
              <th>Department</th>
              <th>Mobile no</th>
            </tr>
          </thead>
          <tbody>
            {user
              .slice(0)
              .reverse()
              .map((users, index) => (
                <tr Key={index}>
                  <td>{index + 1}</td>
                  <td>{users.book_name}</td>
                  <td>{users.author_name}</td>
                  <td>{users.book_code}</td>
                  <td>{users.date}</td>
                  <td>{users.date2}</td>
                  <td>{users.student_name}</td>
                  <td>{users.reg_no}</td>
                  <td>{users.department}</td>
                  <td>{users.mobile_no}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Returned;
