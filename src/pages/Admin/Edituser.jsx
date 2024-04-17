import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Adminnav from "./Admainnav";
import { toast } from "react-toastify";

const Edituser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    book_name: "",
    author_name: "",
    book_code: "",
    date: "",
    date2: "",
    student_name: "",
    reg_no: "",
    department: "",
    mobile_no: "",
  });

  const {
    book_name,
    author_name,
    book_code,
    date,
    date2,
    student_name,
    reg_no,
    department,
    mobile_no,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        book_name &&
        author_name &&
        book_code &&
        date &&
        date2 &&
        student_name &&
        reg_no &&
        department &&
        mobile_no
      ) {
        await axios.put(`http://localhost:8080/post/${id}`, user);
        toast.success("Updated");
        navigate("/maindashboard-admin");
      } else {
        toast.error("Fill all the required fields");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to update user. Please try again later.");
    }
  };

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/post/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("Failed to fetch user data. Please try again later.");
    }
  };

  return (
    <div>
      <Adminnav />
      <div className="addborrow2">
        <div className="bookCard2">
          <Card style={{ width: "20rem", height: "26rem" }}>
            <Card.Body>
              <div className="uploadcard">
                <label>Enter book name</label>
                <input
                  type="text"
                  placeholder="*Enter book name"
                  name="book_name"
                  value={book_name}
                  onChange={onInputChange}
                  readOnly
                />
                <label>Enter author name</label>
                <input
                  type="text"
                  placeholder="*Enter author name"
                  name="author_name"
                  value={author_name}
                  onChange={onInputChange}
                  readOnly
                />
                <label>Book CODE</label>
                <input
                  type="number"
                  placeholder="*Enter Book no "
                  name="book_code"
                  value={book_code}
                  onChange={onInputChange}
                  readOnly
                />
                <label>Date of borrowed</label>
                <input
                  type="date"
                  placeholder=""
                  name="date"
                  value={date}
                  onChange={onInputChange}
                  readOnly
                />
                <label style={{color:"#4CCD99"}}>Return Date *</label>
                <input
                  type="date"
                  placeholder=""
                  name="date2"
                  value={date2}
                  onChange={onInputChange}
                />
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="bookCard2">
          <Card style={{ width: "20rem", height: "26rem" }}>
            <Card.Body>
              <div className="uploadcard">
                <label>Student</label>
                <input
                  type="text"
                  placeholder="*Enter the name"
                  name="student_name"
                  value={student_name}
                  onChange={onInputChange}
               readOnly
          
          />
                <label>Reg NO</label>
                <input
                  type="number"
                  placeholder="*Enter Reg no"
                  name="reg_no"
                  value={reg_no}
                  onChange={onInputChange}
                  
              readOnly
                />
                <label>Department</label>
                <input
                  type="text"
                  placeholder="*Enter Dept"
                  name="department"
                  value={department}
                  onChange={onInputChange}
                  readOnly
                />
                <label>Mobile number</label>
                <input
                  type="number"
                  placeholder="*Enter mobile no"
                  name="mobile_no"
                  value={mobile_no}
                  onChange={onInputChange}
                  readOnly
                />

                <Button
                  variant="danger"
                  style={{ marginTop: "20px" }}
                  onClick={onSubmit}
                >
                  Save
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Edituser;
